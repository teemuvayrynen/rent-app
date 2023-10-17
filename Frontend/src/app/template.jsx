"use client"
import { Amplify } from "aws-amplify"
require('dotenv').config()

Amplify.configure({
  Auth: {
    region: "eu-west-1",
    userPoolId: "eu-west-1_7yKEZnhvf", 
    userPoolWebClientId: "4me4cjsoab9pifgiddkms4grt0",
    identityPoolId: "eu-west-1:ad29b9bf-0428-4374-b37f-0f33c543336e"
  },
  Storage: {
    AWSS3: {
      bucket: "s3-image-bucket-apartments",
      region: "eu-west-1",
      level: "private"
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