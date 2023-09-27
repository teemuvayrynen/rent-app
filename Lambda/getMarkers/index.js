const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()


export async function handler(event) {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    let params = {
      TableName: "dynamo-apartment-storage",
      ProjectionExpression: "id, price, #l",
      ExpressionAttributeNames: { 
        "#l": "location",
      },
      ExpressionAttributeValues: {
        ":c": "finland"
      },
      KeyConditionExpression: 'country = :c',
    }
  
    body = await dynamo.query(params).promise()

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