const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
import Ajv from "ajv"
import { finalApartmentSchema } from "./schema";


const ajv = new Ajv()
const dynamo = new AWS.DynamoDB.DocumentClient()

const validate = ajv.compile(finalApartmentSchema)


export async function handler(event, context) {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    const data = JSON.parse(event.body)


    
    
    body = {
      message: "works"
    }

  } catch (err) {
    statusCode = 405

    body = err.message
  } finally {
    body = JSON.stringify(body)
  }

  return {
    headers,
    statusCode,
    body
  };
}

// const params = {
//   TableName: "dynamo-apartment-storage",
//   Item: {
//     id: uuidv4(),
//     geohash: uuidv4(),
//     price: data.price
//   }
// }

// await dynamo.put(params).promise()





