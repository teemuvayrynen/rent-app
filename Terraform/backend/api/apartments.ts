import { Construct } from "constructs";
import { DynamodbTable } from "@cdktf/provider-aws/lib/dynamodb-table";
import { Apigatewayv2Api } from "@cdktf/provider-aws/lib/apigatewayv2-api";
import { Apigatewayv2Stage } from "@cdktf/provider-aws/lib/apigatewayv2-stage";
import { GetApartmentsLambda } from "../lambda/getApartments";
import { AddApartmentsLambda } from "../lambda/addApartment";
import { DeleteApartmentsLambda } from "../lambda/deleteApartment";
import { GetMarkersLambda } from "../lambda/getMarkers";
import { GetLandingApartmentsLambda } from "../lambda/getLandingApartments";
import { GetUserApartmentsLambda } from "../lambda/getUserApartments";
import { GetApartmentLambda } from "../lambda/getApartment";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";

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
  add_ap_lambda_role: IamRole
  constructor(scope: Construct, id: string, table: DynamodbTable) {
    super(scope, id);

    const api = new Apigatewayv2Api(this, "api-gw", {
      name: "apartments-api-gateway-for-lambda-functions",
      protocolType: "HTTP",
      corsConfiguration: {
        allowOrigins: ["*"],
        allowMethods: ["GET", "POST", "DELETE", "OPTIONS"],
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

    new GetApartmentLambda(this, "get-apartment-lambda", {
      table,
      lambdaRolePolicy,
      api
    })

    this.add_ap_lambda_role = new AddApartmentsLambda(this, "add-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    }).role

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

    new GetLandingApartmentsLambda(this, "get-landing-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    })

    new GetUserApartmentsLambda(this, "get-user-apartments-lambda", {
      table,
      lambdaRolePolicy,
      api
    })
  }
}