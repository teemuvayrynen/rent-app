import moment from 'moment/moment';

const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

var formats = [
  moment.ISO_8601
];

export async function handler(event, context) {
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

    if (event.queryStringParameters && event.queryStringParameters.minPrice && event.queryStringParameters.maxPrice) {
      const minPrice = event.queryStringParameters.minPrice
      const maxPrice = event.queryStringParameters.maxPrice

      if (isNaN(minPrice) || isNaN(maxPrice)) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "Price can be only numbers"
          })
        }
      }

      let filter = {
        FilterExpression: "price >= :minPrice AND price <= :maxPrice",
        ExpressionAttributeValues: {
          ":minPrice": Number(minPrice),
          ":maxPrice": Number(maxPrice)
        }
      }
      params = {
        ...params,
        ...filter
      }
    }

    if (event.queryStringParameters && event.queryStringParameters.startDate && event.queryStringParameters.endDate) {
      let rentStart = event.queryStringParameters.startDate
      let rentEnd = event.queryStringParameters.endDate
      
      if (rentStart === "now") {
        const date = new Date(Date.now())
        rentStart = date.toJSON()
      }

      if (moment(rentStart, formats, true).isValid() && moment(rentEnd, formats, true).isValid() && new Date(rentEnd) > new Date(rentStart)) {
        params = {
          ...params,
          FilterExpression: (params.hasOwnProperty("FilterExpression") && params.FilterExpression.length !== 0 ? 
          params.FilterExpression + " AND #ed <> :temp AND #sd <= :startDate AND #ed >= :endDate" : 
          "#ed <> :temp AND #sd <= :startDate AND #ed >= :endDate"),
          ExpressionAttributeValues: (params.hasOwnProperty("ExpressionAttributeValues") ? {
            ...params.ExpressionAttributeValues,
            ":startDate": rentStart,
            ":endDate": rentEnd,
            ":temp": "temp"
          } : {
            ":startDate": rentStart,
            ":endDate": rentEnd,
            ":temp": "temp"
          }),
          ExpressionAttributeNames: {
            ...params.ExpressionAttributeNames,
            "#sd": "startDate",
            "#ed": "endDate"
          }
        }
      } else if (rentEnd === "temp") {
        params = {
          ...params,
          FilterExpression: (params.hasOwnProperty("FilterExpression") && params.FilterExpression.length !== 0 ? 
          params.FilterExpression + " AND #ed = :temp AND #sd <= :startDate" : 
          "#ed = :temp AND #sd <= :startDate"),
          ExpressionAttributeValues: (params.hasOwnProperty("ExpressionAttributeValues") ? {
            ...params.ExpressionAttributeValues,
            ":startDate": rentStart,
            ":temp": "temp"
          } : {
            ":startDate": rentStart,
            ":temp": "temp"
          }),
          ExpressionAttributeNames: {
            ...params.ExpressionAttributeNames,
            "#sd": "startDate",
            "#ed": "endDate"
          }
        }
      } else if (moment(rentStart, formats, true).isValid() && moment(rentEnd, formats, true).isValid() && new Date(rentEnd) < new Date(rentStart)) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "start date can't be after end date"
          })
        }
      } else if (!moment(rentStart, formats, true).isValid() || !moment(rentEnd, formats, true).isValid()) {
        return {
          headers,
          statusCode: 404,
          body: JSON.stringify({
            message: "Wrong date value"
          })
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