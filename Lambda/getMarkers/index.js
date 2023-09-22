import moment from 'moment/moment';

const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

var formats = [
  moment.ISO_8601
];

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
      ExpressionAttributeNames: { "#l": "location" },
    }

    if (event.queryStringParameters && event.queryStringParameters.price) {
      const price = event.queryStringParameters.price

      if (isNaN(price)) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "Only numbers allowed"
          })
        }
      }

      let filter = {
        FilterExpression: "price <= :maxPrice",
        ExpressionAttributeValues: {
          ":maxPrice": Number(price)
        }
      }
      params = {
        ...params,
        ...filter
      }
    }

    if (event.queryStringParameters && event.queryStringParameters.startDate && event.queryStringParameters.endDate) {
      let startDate = event.queryStringParameters.startDate
      let endDate = event.queryStringParameters.endDate
      
      if (startDate === "now") {
        const date = new Date(Date.now())
        startDate = date.toJSON()
      }

      if ((endDate !== "temp" && !moment(endDate, formats, true).isValid()) || !moment(startDate, formats, true).isValid()) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "Wrong date value"
          })
        }
      }

      if (endDate !== "temp" && new Date(startDate) > new Date(endDate)) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "Starting date can't be after ending date"
          })
        }
      }

      let expression = params.hasOwnProperty("FilterExpression") && params.FilterExpression.length !== 0 ? params.FilterExpression : ""
      let attributes;
      const newAttr = {
        ":startDate": startDate,
        ":endDate": endDate,
        ":temp": "temp"
      }
      
      if (endDate !== "temp") {
        expression = expression.length !== 0 
        ? expression + " AND #ed <> :temp AND #sd <= :startDate AND #ed >= :endDate" 
        : "#ed <> :temp AND #sd <= :startDate AND #ed >= :endDate"
        attributes = params.hasOwnProperty("ExpressionAttributeValues") ? {
          ...params.ExpressionAttributeValues,
          ...newAttr
        } : { ...newAttr }
      } else {
        expression = expression.length !== 0 
        ? expression + " AND #ed = :temp AND #sd <= :startDate" 
        : "#ed = :temp AND #sd <= :startDate"
        attributes = params.hasOwnProperty("ExpressionAttributeValues") ? {
          ...params.ExpressionAttributeValues,
          ":startDate": startDate,
          ":temp": "temp"
        } : { 
          ":startDate": startDate,
          ":temp": "temp"
        }
      }

      params = {
        ...params,
        FilterExpression: expression,
        ExpressionAttributeValues: attributes,
        ExpressionAttributeNames: {
          ...params.ExpressionAttributeNames,
          "#sd": "startDate",
          "#ed": "endDate"
        }
      }
    }
  
    body = await dynamo.scan(params).promise()

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