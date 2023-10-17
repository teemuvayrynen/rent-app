const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()


export async function handler(event) {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    if (event.queryStringParameters.places) {

      const arr = event.queryStringParameters.places.split(",")
      if (arr.length === 0) {
        statusCode = 405
        body = "Error"
        return
      }

      let result = []

      for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        let params = {
          TableName: "dynamo-apartment-storage",
          IndexName: "country-city-index",
          ProjectionExpression: "id, monthlyPrice, #l, street_name, city, startDate, endDate, images, size",
          ExpressionAttributeNames: { "#l": "location" },
          ExpressionAttributeValues: {
            ":c": "finland",
            ":city": item
          },
          KeyConditionExpression: "country = :c and city = :city",
          Limit: 6
        }
        const data = await dynamo.query(params).promise()
        if (data.Count > 0) {
          const newData = {
            ...data,
            City: item
          }
          result.push(newData)
        }
      }
    
      body = result
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