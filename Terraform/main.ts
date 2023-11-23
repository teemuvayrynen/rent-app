import { Construct } from "constructs";
import { App, TerraformStack, S3Backend } from "cdktf";
import { Frontend } from "./frontend/frontend";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { CloudfrontDistribution } from "@cdktf/provider-aws/lib/cloudfront-distribution";
import { TerraformOutput, Token, Fn } from "cdktf";
import { ServerlessBackend } from "./backend/backend";
import { CloudfrontFunction } from "@cdktf/provider-aws/lib/cloudfront-function";
import * as path from "path"

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "eu-west-1",
      profile: "unirent"
    })

    new S3Backend(this, {
      bucket: "terraform-state-unirent",
      key: "terraform.Terraform.tfstate",
      encrypt: true,
      region: "eu-west-1",
      profile: "unirent"
    })


    new S3Bucket(this, "terraform-state", {
      bucket: "terraform-state-unirent"
    })

    const OAI = new CloudfrontOriginAccessIdentity(this, "websiteOAI", {
      comment: "OAI for s3 website bucket",
    });

    const frontend = new Frontend(this, "frontend", OAI)

    const backend = new ServerlessBackend(this, "serverless-backend", OAI)

    const file = path.resolve("../functions/cloudfront/rewriteRequest.js")

    const rewriteRequestFunction = new CloudfrontFunction(this, "frontend-rewrite-url", {
      code: Token.asString(Fn.file(file)),
      name: "RewriteDefaultIndexRequest",
      publish: true,
      runtime: "cloudfront-js-1.0"
    })

    const cf = new CloudfrontDistribution(this, "cf", {
      enabled: true,
      isIpv6Enabled: true,
      defaultCacheBehavior: {
        allowedMethods: [
          "DELETE",
          "GET",
          "HEAD",
          "OPTIONS",
          "PATCH",
          "POST",
          "PUT",
        ],
        cachedMethods: ["GET", "HEAD"],
        targetOriginId: frontend.bucket.bucket,
        viewerProtocolPolicy: "redirect-to-https",
        forwardedValues: { queryString: false, cookies: { forward: "none" } },
        functionAssociation: [
          {
            eventType: "viewer-request",
            functionArn: Token.asString(rewriteRequestFunction.arn)
          }
        ]
      },
      orderedCacheBehavior: [
        {
          allowedMethods: ["GET", "HEAD"],
          cachedMethods: ["GET", "HEAD"],
          compress: true,
          forwardedValues: {
            cookies: {
              forward: "none",
            },
            headers: ["Origin"],
            queryString: false,
          },
          pathPattern: "/images/*",
          targetOriginId: backend.imgBucket.bucket,
          viewerProtocolPolicy: "redirect-to-https",
        }
      ],
      origin: [
        {
          originId: frontend.bucket.bucket,
          domainName: frontend.bucket.bucketRegionalDomainName,
          s3OriginConfig: {
            originAccessIdentity: Token.asString(
              OAI.cloudfrontAccessIdentityPath
            ),
          },
        },
        {
          originId: backend.imgBucket.bucket,
          domainName: backend.imgBucket.bucketRegionalDomainName,
          s3OriginConfig: {
            originAccessIdentity: Token.asString(
              OAI.cloudfrontAccessIdentityPath
            ),
          },
        },
      ],
      defaultRootObject: "index.html",
      restrictions: { geoRestriction: { restrictionType: "none" } },
      viewerCertificate: { cloudfrontDefaultCertificate: true },
    })

    new TerraformOutput(this, "frontend_domainname", {
      value: cf.domainName,
    }).addOverride("value", `https://${cf.domainName}`);
  }
}

const app = new App();
new MyStack(app, "Terraform");
app.synth();
