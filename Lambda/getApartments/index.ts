const AWS = require('aws-sdk')

const dynamo = new AWS.DynamoDB.DocumentClient()

interface Keys {
  id: string
}

interface Apartments {
  keys: Array<Keys>
}

export async function handler(event) {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json"
  }

  try {
    const data: Apartments = JSON.parse(event.body)

    if (data.keys.length === 0) {
      body = { apartments: [] }
    } else {
      var params = {
        RequestItems: {
          'dynamo-apartment-storage': {
            Keys: data.keys,
            ProjectionExpression: "id, price, #l, address, place, startDate, endDate, images, size",
            ExpressionAttributeNames: { "#l": "location" },
          }
        }
      };
  
      const res = await dynamo.batchGet(params).promise()
      body = { apartments: res.Responses["dynamo-apartment-storage"] }
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

