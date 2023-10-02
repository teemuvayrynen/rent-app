import { Construct } from "constructs";
import { CognitoUserPool } from "@cdktf/provider-aws/lib/cognito-user-pool";
import { CognitoUserPoolClient } from "@cdktf/provider-aws/lib/cognito-user-pool-client";
import { CognitoUserPoolDomain } from "@cdktf/provider-aws/lib/cognito-user-pool-domain";
import { CognitoIdentityPool } from "@cdktf/provider-aws/lib/cognito-identity-pool";
import { DataAwsIamPolicyDocument } from "@cdktf/provider-aws/lib/data-aws-iam-policy-document";
import { IamRole } from "@cdktf/provider-aws/lib/iam-role";
import { IamRolePolicy } from "@cdktf/provider-aws/lib/iam-role-policy";
import { CognitoIdentityPoolRolesAttachment } from "@cdktf/provider-aws/lib/cognito-identity-pool-roles-attachment";
import { Token } from "cdktf";

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

    const client = new CognitoUserPoolClient(this, "user_pool_client", {
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

    const identityPool = new CognitoIdentityPool(this, "identity_pool_client", {
      identityPoolName: "cognito_idenity_pool_client",
      allowUnauthenticatedIdentities: false,
      allowClassicFlow: false,

      cognitoIdentityProviders: [
        {
          clientId: client.id,
          providerName: `cognito-idp.eu-west-1.amazonaws.com/${userPool.id}`,
          serverSideTokenCheck: false
        }
      ]
    })

    const document = new DataAwsIamPolicyDocument(this, "authenticated", {
      statement: [
        {
          effect: "Allow",
          principals: [
            {
              type: "Federated",
              identifiers: ["cognito-identity.amazonaws.com"]
            }
          ],
          actions: ["sts:AssumeRoleWithWebIdentity"],
          condition: [
            {
              test: "StringEquals",
              variable: "cognito-identity.amazonaws.com:aud",
              values: [identityPool.id]
            },
            {
              test: "ForAnyValue:StringLike",
              variable: "cognito-identity.amazonaws.com:amr",
              values: ["authenticated"]
            }
          ]
        }
      ]
    })

    const role = new IamRole(this, "authenticated_role", {
      name: "cognitoAuthenticatedUser",
      assumeRolePolicy: Token.asString(document.json)
    })

    const document_auth = new DataAwsIamPolicyDocument(this, "authenticated_role_policy_document", {
      statement: [
        {
          effect: "Allow",
          actions: [
            "cognito-sync:*", 
            "cognito-identity:*", 
            "s3:PutObject"],
          resources: ["*"]
        }
      ]
    })

    new IamRolePolicy(this, "authenticated_role_policy", {
      name: "authenticated_policy",
      role: role.id,
      policy: Token.asString(document_auth.json)
    })

    new CognitoIdentityPoolRolesAttachment(this, "cognito_pool_attachement", {
      identityPoolId: identityPool.id,
      roles: {
        "authenticated": role.arn
      }
    })

    new CognitoUserPoolDomain(this, "user_pool_domain", {
      domain: "unirent-auth",
      userPoolId: userPool.id
    })
  }
}