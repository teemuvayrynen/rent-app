import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketWebsiteConfiguration } from "@cdktf/provider-aws/lib/s3-bucket-website-configuration";
import { S3BucketPolicy } from "@cdktf/provider-aws/lib/s3-bucket-policy";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";
import { CloudfrontDistribution } from "@cdktf/provider-aws/lib/cloudfront-distribution";
import { TerraformOutput, Token  } from "cdktf";
import { S3Object } from "@cdktf/provider-aws/lib/s3-object";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import * as path from 'path'
import * as glob from 'glob'
import * as mime from 'mime-types'
import * as fs from 'fs'
  

// Creates S3 bucket and cloudfront distribution for hosting Next.js static export

export class Frontend extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    const bucket = new S3Bucket(this, "bucket", {
      bucket: 'website-frontend-bucket',
      tags: {
        "hc-internet-facing": "true"
      }
    })

    new S3BucketPublicAccessBlock(this, "allowPublicAccess", {
      bucket: bucket.id,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
    })

    new S3BucketWebsiteConfiguration(this, "website-configuration", {
      bucket: bucket.bucket,
      indexDocument: {
        suffix: "index.html"
      },
      errorDocument: {
        key: "404.html"
      }
    })

    const OAI = new CloudfrontOriginAccessIdentity(this, "websiteOAI", {
      comment: "OAI for s3 website bucket",
    });

    new S3BucketPolicy(this, "s3_policy", {
      bucket: bucket.bucket,
      policy: JSON.stringify({
        Version: "2012-10-17",
        Id: "PolicyForWebsiteEndpointsPublicContent",
        Statement: [
          {
            Sid: "OnlyCloudfrontAccess",
            Effect: "Allow",
            Principal: {
              "AWS": `${OAI.iamArn}`
            },
            Action: ["s3:GetObject"],
            Resource: [`${bucket.arn}/*`, `${bucket.arn}`],
          },
        ],
      }),
    });
      
    const cf = new CloudfrontDistribution(this, "cf", {
      enabled: true,
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
        targetOriginId: bucket.bucket,
        viewerProtocolPolicy: "redirect-to-https",
        forwardedValues: { queryString: false, cookies: { forward: "none" } },
      },
      origin: [
        {
          originId: bucket.bucket,
          domainName: bucket.bucketRegionalDomainName,
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
    });

    const files = glob.sync('../Frontend/out/**/*', { absolute: false, nodir: true })

    for (const file of files) {
      // Remove .html extension from all files except index and 404 that paging works correctly
      if (file.includes(".html") && !file.includes("index") && !file.includes("404")) {
        fs.rename(file, file.replace(".html", ""), function(err) {
          if ( err ) console.log('ERROR: ' + err);
      });
      }

      new S3Object(this, `aws_s3_object_${path.basename(file)}`, {
        bucket: bucket.bucket,
        key: file.replace(`../Frontend/out/`, ''),
        source: path.resolve(file),
        etag: `${Date.now()}`,
        contentType: mime.contentType(path.extname(file)) || undefined
      })
    }

    new TerraformOutput(this, "frontend_domainname", {
      value: cf.domainName,
    }).addOverride("value", `https://${cf.domainName}`);
  }
}