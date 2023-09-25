"use client"

import React, { createContext } from "react"
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import Pool  from "../components/Auth/UserPool"

const AccountContext = createContext()

const Account = (props) => {
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool })

      const authDetails = new AuthenticationDetails({ Username, Password })

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data)
        },
        onFailure: (err) => {
          reject(err)
        },
        newPasswordRequired: (data) => {
          resolve(data)
        }
      })
    })  

  }
  
  return (
    <AccountContext.Provider value={{authenticate}}>
      {props.children}
    </AccountContext.Provider>
  )
}

export { Account, AccountContext}