import { Construct } from "constructs";
import { NodejsFunction } from "../../lib/nodejs-function";
import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { LambdaFunction } from "@cdktf/provider-aws/lib/lambda-function";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2-api";
import { Apigatewayv2Integration } from "@cdktf/provider-aws/lib/apigatewayv2-integration";
import { Apigatewayv2Route } from "@cdktf/provider-aws/lib/apigatewayv2-route";
import { LambdaPermission } from "@cdktf/provider-aws/lib/lambda-permission";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import { image_bucket } from "../../variables";
import * as path from "path"

interface LambdaOptions {
  table: DynamodbTable
  lambdaRolePolicy: object
  api: Apigatewayv2Api
}

export class AddApartmentsLambda extends Construct {
  role: IamRole
  constructor(scope: Construct, id: string, options: LambdaOptions) {
    super(scope, id);


    const code = new NodejsFunction(this, "code", {
      path: path.join(__dirname, "../../../functions/lambda/addApartment/index.ts"),
    });

    this.role = new IamRole(this, "lambda-exec", {
      name: "add-apartment-lambda-api",
      assumeRolePolicy: JSON.stringify(options.lambdaRolePolicy),
      inlinePolicy: [
        {
          name: "AllowDynamoDB",
          policy: JSON.stringify({
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "dynamodb:PutItem",
                ],
                Resource: options.table.arn,
                Effect: "Allow",
              },
              {
                Action: "s3:*",
                Resource: [
                  `arn:aws:s3:::${image_bucket}/private/*`,
                  `arn:aws:s3:::${image_bucket}/images/*`
                ],
                Effect: "Allow",
              }
            ],
          }),
        },
      ],
    });

    const lambda = new LambdaFunction(this, "api", {
      functionName: "add-apartment-lambda-function-api",
      handler: "index.handler",
      runtime: "nodejs18.x",
      role: this.role.arn,
      filename: code.asset.path,
      sourceCodeHash: code.asset.assetHash,
      timeout: 10,
      memorySize: 512,
      environment: {
        variables: {
          DYNAMODB_TABLE_NAME: options.table.name,
        },
      },
    });

    new LambdaPermission(this, "apigw-lambda", {
      functionName: lambda.functionName,
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      sourceArn: `${options.api.executionArn}/*/*`,
    });

    const apiIntegration = new Apigatewayv2Integration(
      this,
      "api-post-integration",
      {
        apiId: options.api.id,
        integrationType: "AWS_PROXY",
        integrationUri: lambda.invokeArn
      }
    );

    new Apigatewayv2Route(this, "api-post-route", {
      apiId: options.api.id,
      routeKey: "POST /apartments/post",
      target: `integrations/${apiIntegration.id}`,
    })
  }
}