"use client"
import { Amplify } from "aws-amplify"
require('dotenv').config()

Amplify.configure({
  Auth: {
    Cognito: {
      region: "eu-west-1",
      userPoolId: "eu-west-1_52jVAzpr9", 
      userPoolClientId: "7f36oai2rrlvq5e5a5c6nqnjc8",
      identityPoolId: "eu-west-1:ad29b9bf-0428-4374-b37f-0f33c543336e"
    }
  },
  Storage: {
    S3: {
      bucket: "s3-image-bucket-apartments",
      region: "eu-west-1"
    }
  }
});

const RootTemplate = ({children}) => {
  
  return (
    <>
      {children}
    </>
  )
}

export default RootTemplate