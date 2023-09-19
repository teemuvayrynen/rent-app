import { Construct } from "constructs";
import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2-api";
import { Apigatewayv2Stage } from "@cdktf/provider-aws/lib/apigatewayv2-stage";
import { GetApartmentsLambda } from "./lambda/getApartments";
import { AddApartmentsLambda } from "./lambda/addApartment";
import { DeleteApartmentsLambda } from "./lambda/deleteApartment";
import { GetMarkersLambda } from "./lambda/getMarkers";

const lambdaRolePolicy = {
  Version: "2012-10-17",
  Statement: [
    {
      Action: "sts:AssumeRole",
      Principal: {
        Service: "lambda.amazonaws.com",
      },
      Effect: "Allow",
      Sid: "",
    },
  ],
};

export class ApartmentsApi extends Construct {

  constructor(scope: Construct, id: string, table: DynamodbTable) {
    super(scope, id);

    const api = new Apigatewayv2Api(this, "api-gw", {
      name: "apartments-api-gateway-for-lambda-functions",
      protocolType: "HTTP",
      corsConfiguration: {
        allowOrigins: ["*"],
        allowMethods: ["GET"],
        allowHeaders: ["Content-Type"],
      },
    });

    new Apigatewayv2Stage(this, "api-stage", {
      apiId: api.id,
      name: "api",
      autoDeploy: true
    })

    new GetApartmentsLambda(this, "get-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    })

    new AddApartmentsLambda(this, "add-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    })

    new DeleteApartmentsLambda(this, "delete-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    })

    new GetMarkersLambda(this, "get-markers-lambda", {
      table,
      lambdaRolePolicy,
      api
    })
  }
}