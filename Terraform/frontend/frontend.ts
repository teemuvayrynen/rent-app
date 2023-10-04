import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketWebsiteConfiguration } from "@cdktf/provider-aws/lib/s3-bucket-website-configuration";
import { S3BucketPolicy } from "@cdktf/provider-aws/lib/s3-bucket-policy";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";
import { S3Object } from "@cdktf/provider-aws/lib/s3-object";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import { frontend_bucket } from "../variables";
import * as path from 'path'
import * as glob from 'glob'
import * as mime from 'mime-types'
  

// Creates S3 bucket and cloudfront distribution for hosting Next.js static export

export class Frontend extends Construct {
  bucket: S3Bucket
  constructor(scope: Construct, id: string, OAI: CloudfrontOriginAccessIdentity) {
    super(scope, id)

    this.bucket = new S3Bucket(this, "bucket", {
      bucket: frontend_bucket,
      tags: {
        "hc-internet-facing": "true"
      }
    })

    new S3BucketPublicAccessBlock(this, "dontAllowPublicAccess", {
      bucket: this.bucket.id,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
    })

    new S3BucketWebsiteConfiguration(this, "website-configuration", {
      bucket: this.bucket.bucket,
      indexDocument: {
        suffix: "index.html"
      },
      errorDocument: {
        key: "404.html"
      }
    })

    new S3BucketPolicy(this, "s3_policy", {
      bucket: this.bucket.bucket,
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
            Resource: [`${this.bucket.arn}/*`, `${this.bucket.arn}`],
          },
        ],
      }),
    });

    const files = glob.sync('../Frontend/out/**/*', { absolute: false, nodir: true })

    for (const file of files) {
      if (!file.replace(`../Frontend/out/`, '').includes(".")) {
        new S3Object(this, `aws_s3_object_${path.basename(file)}`, {
          bucket: this.bucket.bucket,
          key: file.replace(`../Frontend/out/`, ''),
          source: path.resolve(file),
          etag: `${Date.now()}`,
          contentType: mime.contentType(".html") || undefined
        })

      } else {
        new S3Object(this, `aws_s3_object_${path.basename(file)}`, {
          bucket: this.bucket.bucket,
          key: file.replace(`../Frontend/out/`, ''),
          source: path.resolve(file),
          etag: `${Date.now()}`,
          contentType: mime.contentType(path.extname(file)) || undefined
        })
      }
    }
  }
}