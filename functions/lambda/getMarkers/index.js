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
      ProjectionExpression: "id, monthlyPrice, #l, startDate, endDate",
      ExpressionAttributeNames: { 
        "#l": "location",
      },
      ExpressionAttributeValues: {
        ":c": "finland"
      },
      KeyConditionExpression: "country = :c",
    }

    let expression = ""
    if (event.queryStringParameters?.price) {
      params.ExpressionAttributeValues[":p"] = Number(event.queryStringParameters?.price)
      expression = "monthlyPrice <= :p"
    }

    if (event.queryStringParameters?.startDate) {
      params.ExpressionAttributeValues[":startDate"] = event.queryStringParameters?.startDate
      expression = expression.length > 0 ? expression + " AND startDate <= :startDate" : "startDate <= :startDate"
    }

    if (event.queryStringParameters?.endDate) {
      const value = event.queryStringParameters?.endDate
      if (value === "temp") {
        params.ExpressionAttributeValues[":endDate"] = ""
        expression = expression.length > 0 ? expression + " AND endDate = :endDate" : "endDate = :endDate"
      } else {
        params.ExpressionAttributeValues[":endDate"] = event.queryStringParameters?.endDate
        params.ExpressionAttributeValues[":empty"] = ""
        expression = expression.length > 0 ? expression + " AND (:endDate <= endDate OR :empty = endDate)" : "(:endDate <= endDate OR :empty = endDate)"
      }
    }

    if (expression.length > 0) {
      params.FilterExpression = expression
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