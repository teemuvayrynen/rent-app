import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { S3BucketWebsiteConfiguration } from "@cdktf/provider-aws/lib/s3-bucket-website-configuration";
import { S3BucketPolicy } from "@cdktf/provider-aws/lib/s3-bucket-policy";
import { S3BucketPublicAccessBlock } from "@cdktf/provider-aws/lib/s3-bucket-public-access-block";
import { Construct } from "constructs";
import { CloudfrontDistribution } from "@cdktf/provider-aws/lib/cloudfront-distribution";
import { TerraformOutput  } from "cdktf";
import { S3Object } from "@cdktf/provider-aws/lib/s3-object";
import * as path from 'path'
import * as glob from 'glob'
import * as mime from 'mime-types'

const S3_ORIGIN_ID = "s3Origin";


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
      blockPublicAcls: false,
      blockPublicPolicy: false,
      ignorePublicAcls: false,
      restrictPublicBuckets: false,
    })

    const bucketWebsite = new S3BucketWebsiteConfiguration(this, "website-configuration", {
      bucket: bucket.bucket,
      indexDocument: {
        suffix: "index.html"
      },
      errorDocument: {
        key: "404.html"
      }
    })

    new S3BucketPolicy(this, "s3_policy", {
      bucket: bucket.bucket,
      policy: JSON.stringify({
        Version: "2012-10-17",
        Id: "PolicyForWebsiteEndpointsPublicContent",
        Statement: [
          {
            Sid: "PublicRead",
            Effect: "Allow",
            Principal: "*",
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
        targetOriginId: S3_ORIGIN_ID,
        viewerProtocolPolicy: "redirect-to-https",
        forwardedValues: { queryString: false, cookies: { forward: "none" } },
      },
      origin: [
        {
          originId: S3_ORIGIN_ID,
          domainName: bucketWebsite.websiteEndpoint,
          customOriginConfig: {
            originProtocolPolicy: "http-only",
            httpPort: 80,
            httpsPort: 443,
            originSslProtocols: ["TLSv1.2", "TLSv1.1", "TLSv1"],
          },
        },
      ],
      defaultRootObject: "index.html",
      restrictions: { geoRestriction: { restrictionType: "none" } },
      viewerCertificate: { cloudfrontDefaultCertificate: true },
    });

    const files = glob.sync('../Frontend/out/**/*', { absolute: false, nodir: true })

    for (const file of files) {
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