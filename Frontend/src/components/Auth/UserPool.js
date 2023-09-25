import { CognitoUserPool } from "amazon-cognito-identity-js"

// Non-sensitive data

const poolData = {
  UserPoolId: "eu-west-1_7yKEZnhvf",
  ClientId: "4me4cjsoab9pifgiddkms4grt0"
}

export default new CognitoUserPool(poolData)
