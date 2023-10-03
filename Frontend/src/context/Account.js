"use client"

import React, { createContext } from "react"
import { Amplify, Auth } from 'aws-amplify';

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


const AccountContext = createContext()

const Account = (props) => {

  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      Auth.currentAuthenticatedUser()
      .then((data) => {
        console.log(data)
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  const authenticate = async (username, password) => {
    return await new Promise((resolve, reject) => {
      Auth.signIn(username, password)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
    })  
  }

  const logout = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      Error(error)
    }
  }
  
  return (
    <AccountContext.Provider value={{ authenticate, getSession, logout }}>
      {props.children}
    </AccountContext.Provider>
  )
}

export { Account, AccountContext }