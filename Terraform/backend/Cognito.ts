import { Construct } from "constructs";
import { CognitoUserPool } from "@cdktf/provider-aws/lib/cognito-user-pool";
import { CognitoUserPoolClient } from "@cdktf/provider-aws/lib/cognito-user-pool-client";
import { CognitoUserPoolDomain } from "@cdktf/provider-aws/lib/cognito-user-pool-domain";


export class Cognito extends Construct {

  constructor(scope: Construct, id: string ) {
    super(scope, id);

    const userPool = new CognitoUserPool(this, "user_pool", {
      name: "aws-elb-cognito-auth",
      usernameAttributes: ["email"],
      autoVerifiedAttributes: ["email"],
      mfaConfiguration: "OFF",
      passwordPolicy: {
        minimumLength: 8,
        requireLowercase: true,
        requireNumbers: true,
        requireSymbols: true,
        requireUppercase: true,
        temporaryPasswordValidityDays: 7
      },
      schema: [
        {
          name: "email",
          attributeDataType: "String",
          developerOnlyAttribute: false,
          mutable: true,
          required: true,
          stringAttributeConstraints: {
            maxLength: "256",
            minLength: "1"
          }
        },
        {
          name: "name",
          attributeDataType: "String",
          developerOnlyAttribute: false,
          mutable: true,
          required: true,
          stringAttributeConstraints: {
            maxLength: "256",
            minLength: "1"
          },
        }
      ],
      emailConfiguration: {
        emailSendingAccount: "COGNITO_DEFAULT"
      },
      verificationMessageTemplate: {
        defaultEmailOption: "CONFIRM_WITH_LINK",
        emailMessageByLink: "Please click the link below to verify your email address. {##Verify Email##}",
        emailSubjectByLink: "Confirm account"
      },
      userAttributeUpdateSettings: {
        attributesRequireVerificationBeforeUpdate: ["email"]
      }
    })

    new CognitoUserPoolClient(this, "user_pool_client", {
      name: "cognito_client",
      userPoolId: userPool.id,
      generateSecret: false,
      refreshTokenValidity: 7,
      preventUserExistenceErrors: "ENABLED",
      explicitAuthFlows: [
        "ALLOW_REFRESH_TOKEN_AUTH",
        "ALLOW_USER_SRP_AUTH"
      ]
    })

    new CognitoUserPoolDomain(this, "user_pool_domain", {
      domain: "unirent-auth",
      userPoolId: userPool.id
    })
  }
}