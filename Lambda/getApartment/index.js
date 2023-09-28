const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()


export async function handler(event) {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    if (event.pathParameters?.id) {
      let params = {
        TableName: "dynamo-apartment-storage",
        Key: {
          country: "finland",
          id: event.pathParameters?.id
        }
      }
    
      body = await dynamo.get(params).promise()
    } else {
      statusCode = 405
      body = "Error"
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