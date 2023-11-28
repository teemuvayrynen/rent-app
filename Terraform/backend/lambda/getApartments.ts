import { Construct } from "constructs";
import { NodejsFunction } from "../../lib/nodejs-function";
import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { LambdaFunction } from "@cdktf/provider-aws/lib/lambda-function";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2-api";
import { Apigatewayv2Integration } from "@cdktf/provider-aws/lib/apigatewayv2-integration";
import { Apigatewayv2Route } from "@cdktf/provider-aws/lib/apigatewayv2-route";
import { LambdaPermission } from "@cdktf/provider-aws/lib/lambda-permission";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import * as path from "path"

interface LambdaOptions {
  table: DynamodbTable,
  lambdaRolePolicy: object,
  api: Apigatewayv2Api
}

export class GetApartmentsLambda extends Construct {
  lambda: LambdaFunction
  constructor(scope: Construct, id: string, options: LambdaOptions) {
    super(scope, id);


    const code = new NodejsFunction(this, "code", {
      path: path.join(__dirname, "../../../functions/lambda/getApartments/index.ts"),
    });

    const role = new IamRole(this, "lambda-exec", {
      name: "get-apartments-lambda-api",
      assumeRolePolicy: JSON.stringify(options.lambdaRolePolicy),
      inlinePolicy: [
        {
          name: "AllowDynamoDB",
          policy: JSON.stringify({
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "dynamodb:BatchGetItem"
                ],
                Resource: options.table.arn,
                Effect: "Allow",
              },
            ],
          }),
        },
      ],
    });

    this.lambda = new LambdaFunction(this, "api", {
      functionName: "get-apartments-lambda-function-api",
      handler: "index.handler",
      runtime: "nodejs18.x",
      role: role.arn,
      filename: code.asset.path,
      sourceCodeHash: code.asset.assetHash,
      environment: {
        variables: {
          DYNAMODB_TABLE_NAME: options.table.name,
        },
      },
    });

    new LambdaPermission(this, "apigw-lambda", {
      functionName: this.lambda.functionName,
      action: "lambda:InvokeFunction",
      principal: "apigateway.amazonaws.com",
      sourceArn: `${options.api.executionArn}/*/*`,
    });

    const apiIntegration = new Apigatewayv2Integration(
      this,
      "api-get-integration",
      {
        apiId: options.api.id,
        integrationType: "AWS_PROXY",
        integrationUri: this.lambda.invokeArn
      }
    );

    new Apigatewayv2Route(this, "api-get-route", {
      apiId: options.api.id,
      routeKey: "POST /apartments/get",
      target: `integrations/${apiIntegration.id}`,
    })
  }
}