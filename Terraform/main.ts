import { Construct } from "constructs";
import { App, TerraformStack, S3Backend } from "cdktf";

import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { S3Bucket } from "@cdktf/provider-aws/lib/s3-bucket";


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
    
    
  }
}

const app = new App();
new MyStack(app, "Terraform");
app.synth();
