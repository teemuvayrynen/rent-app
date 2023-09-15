import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";


export class S3ImageBucket extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    const bucket = new S3Bucket(this, "bucket", {
      bucket: 's3-image-bucket',
      tags: {
        "hc-internet-facing": "true"
      }
    })

    new S3BucketPublicAccessBlock(this, "allowPublicAccess", {
      bucket: bucket.id,
      blockPublicAcls: false,
      blockPublicPolicy: false,
      ignorePublicAcls: false,
      restrictPublicBuckets: false,
    })

    
  }
}