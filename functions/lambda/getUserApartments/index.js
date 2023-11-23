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
        IndexName: "country-ownerId-index",
        ProjectionExpression: "id, monthlyPrice, #l, street_name, city, startDate, endDate, images, size",
        ExpressionAttributeNames: { "#l": "location" },
        ExpressionAttributeValues: {
          ":c": "finland",
          ":id": event.pathParameters?.id
        },
        KeyConditionExpression: 'country = :c and ownerId = :id',
      }
    
      body = await dynamo.query(params).promise()
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