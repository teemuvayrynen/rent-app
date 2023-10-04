import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";
import { S3BucketPolicy } from "@cdktf/provider-aws/lib/s3-bucket-policy";
import { S3BucketCorsConfiguration } from "@cdktf/provider-aws/lib/s3-bucket-cors-configuration";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import { image_bucket } from "../variables";

export class S3ImageBucket extends Construct {
  bucket: S3Bucket
  constructor(scope: Construct, id: string, OAI: CloudfrontOriginAccessIdentity, cognitoRole: IamRole, lambda_role: IamRole) {
    super(scope, id)

    this.bucket = new S3Bucket(this, "bucket", {
      bucket: image_bucket,
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

    new S3BucketCorsConfiguration(this, "s3_cors_policy", {
      bucket: this.bucket.id,
      corsRule: [
        {
          allowedHeaders: ["*"],
          allowedMethods: ["PUT", "POST"],
          allowedOrigins: ["*"],
          exposeHeaders: [],
          maxAgeSeconds: 3000,
        },
      ]
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
            Resource: [`${this.bucket.arn}/images/*`],
          },
          {
            Sid: "CognitoAllowPut",
            Effect: "Allow",
            Principal: {
              "AWS": `${cognitoRole.arn}`
            },
            Action: ["s3:PutObject"],
            Resource: [`${this.bucket.arn}/private/*`],
          },
          {
            Sid: "LambdaAllowAccess",
            Effect: "Allow",
            Principal: {
              "AWS": `${lambda_role.arn}`
            },
            Action: "*",
            Resource: [
              `${this.bucket.arn}/private/*`,
              `${this.bucket.arn}/images/*`
            ],
          }
        ],
      }),
    });
  }
}