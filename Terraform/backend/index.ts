import { Construct } from "constructs";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";
import { ApartmentsStorage } from "./storage";
import { ApartmentsApi } from "./api/apartments";
import { Cognito } from "./cognito";

export class ServerlessBackend extends Construct {
  constructor(scope: Construct, id: string, imgBucket: S3Bucket) {
    super(scope, id);

    const storage = new ApartmentsStorage(this, "storage");

    new ApartmentsApi(this, "api", storage.table, imgBucket)

    new Cognito(this, "cognito")
  }
} 