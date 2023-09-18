import { Construct } from "constructs";
import { App, TerraformStack, S3Backend } from "cdktf";
// import { Frontend } from "./frontend/frontend";
// import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
// import { S3ImageBucket } from "./imageStorage/s3imagebucket";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
// import { CloudfrontDistribution } from "@cdktf/provider-aws/lib/cloudfront-distribution";
// import { TerraformOutput, Token } from "cdktf";
import { ServerlessBackend } from "./backend";


class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AwsProvider(this, "AWS", {
      region: "eu-west-1"
    })

    new S3Backend(this, {
      bucket: "terraform-state-unirent",
      key: "terraform.Terraform.tfstate",
      encrypt: true,
      region: "eu-west-1",
    })

    new S3Bucket(this, "terraform-state", {
      bucket: "terraform-state-unirent"
    })

    // const OAI = new CloudfrontOriginAccessIdentity(this, "websiteOAI", {
    //   comment: "OAI for s3 website bucket",
    // });

    // const frontend = new Frontend(this, "frontend", OAI)

    // const images = new S3ImageBucket(this, "image-bucket", OAI)

    new ServerlessBackend(this, "serverless-backend")

    // const cf = new CloudfrontDistribution(this, "cf", {
    //   enabled: true,
    //   isIpv6Enabled: true,
    //   defaultCacheBehavior: {
    //     allowedMethods: [
    //       "DELETE",
    //       "GET",
    //       "HEAD",
    //       "OPTIONS",
    //       "PATCH",
    //       "POST",
    //       "PUT",
    //     ],
    //     cachedMethods: ["GET", "HEAD"],
    //     targetOriginId: frontend.bucket.bucket,
    //     viewerProtocolPolicy: "redirect-to-https",
    //     forwardedValues: { queryString: false, cookies: { forward: "none" } },
    //   },
    //   orderedCacheBehavior: [
    //     {
    //       allowedMethods: ["GET", "HEAD"],
    //       cachedMethods: ["GET", "HEAD"],
    //       compress: true,
    //       forwardedValues: {
    //         cookies: {
    //           forward: "none",
    //         },
    //         headers: ["Origin"],
    //         queryString: false,
    //       },
    //       pathPattern: "/images/*",
    //       targetOriginId: images.bucket.bucket,
    //       viewerProtocolPolicy: "redirect-to-https",
    //     }
    //   ],
    //   origin: [
    //     {
    //       originId: frontend.bucket.bucket,
    //       domainName: frontend.bucket.bucketRegionalDomainName,
    //       s3OriginConfig: {
    //         originAccessIdentity: Token.asString(
    //           OAI.cloudfrontAccessIdentityPath
    //         ),
    //       },
    //     },
    //     {
    //       originId: images.bucket.bucket,
    //       domainName: images.bucket.bucketRegionalDomainName,
    //       s3OriginConfig: {
    //         originAccessIdentity: Token.asString(
    //           OAI.cloudfrontAccessIdentityPath
    //         ),
    //       },
    //     },
    //   ],
    //   defaultRootObject: "index.html",
    //   restrictions: { geoRestriction: { restrictionType: "none" } },
    //   viewerCertificate: { cloudfrontDefaultCertificate: true },
    // });

    // new TerraformOutput(this, "frontend_domainname", {
    //   value: cf.domainName,
    // }).addOverride("value", `https://${cf.domainName}`);


    // for later use

    // const asset = new TerraformAsset(this, "frontend-asset", {
    //   path: path.resolve("../", "Frontend"),
    //   type: AssetType.ARCHIVE,
    // });

    // new S3BucketObject(this, "frontend-archive", {
    //   bucket: bucket.bucket,
    //   key: asset.fileName,
    //   source: asset.path,
    // });
  }
}

const app = new App();
new MyStack(app, "Terraform");
app.synth();
