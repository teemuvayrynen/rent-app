import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";
import { S3BucketPolicy } from "@cdktf/provider-aws/lib/s3-bucket-policy";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";

export class S3ImageBucket extends Construct {
  bucket: S3Bucket
  constructor(scope: Construct, id: string, OAI: CloudfrontOriginAccessIdentity) {
    super(scope, id)

    this.bucket = new S3Bucket(this, "bucket", {
      bucket: 's3-image-bucket-apartments',
      tags: {
        "hc-internet-facing": "true"
      }
    })

    new S3BucketPublicAccessBlock(this, "allowPublicAccess", {
      bucket: this.bucket.id,
      blockPublicAcls: true,
      blockPublicPolicy: true,
      ignorePublicAcls: true,
      restrictPublicBuckets: true,
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
          {
            Effect: "Allow",
            Action: "s3:PutObject",
            Resource: [`${this.bucket.arn}/*`],
          }
        ],
      }),
    });
  }
}