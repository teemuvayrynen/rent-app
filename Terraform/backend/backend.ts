import { Construct } from "constructs";
import { ApartmentsStorage } from "./storage";
import { ApartmentsApi } from "./api/apartments";
import { Cognito } from "./cognito";
import { CloudfrontOriginAccessIdentity } from "@cdktf/provider-aws/lib/cloudfront-origin-access-identity";
import { S3ImageBucket } from "../imageStorage/s3imagebucket";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";

export class ServerlessBackend extends Construct {
  imgBucket: S3Bucket
  constructor(scope: Construct, id: string, OAI: CloudfrontOriginAccessIdentity) {
    super(scope, id);

    const cognito = new Cognito(this, "cognito").cognitoRole
    
    this.imgBucket = new S3ImageBucket(this, "image-bucket", OAI, cognito).bucket

    const storage = new ApartmentsStorage(this, "storage");

    new ApartmentsApi(this, "api", storage.table, this.imgBucket)
  }
} 