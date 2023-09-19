const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
import Ajv from "ajv"
import { finalApartmentSchema } from "./schema";
import { ApartmentData } from "./schema";


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
    const data: ApartmentData = JSON.parse(event.body)

    if (validate(data)) {
      const params = {
        TableName: "dynamo-apartment-storage",
        Item: {
          id: uuidv4(),
          ...data
        }
      }
      
      await dynamo.put(params).promise()
      body = {
        message: "success"
      }
    } else {
      body = {
        message: validate.errors
      }
      statusCode = 404
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