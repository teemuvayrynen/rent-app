const AWS = require('aws-sdk')

const dynamo = new AWS.DynamoDB.DocumentClient()
const s3 = new AWS.S3()

const bucket = "s3-image-bucket-apartments"

export async function handler(event) {
  let body;
  let statusCode = 200;

  const headers = {
    "Content-Type": "application/json"
  };

  try {
    if (event.pathParameters?.id) {
      let params = {
        TableName: "dynamo-apartment-storage",
        Key: {
          country: "finland",
          id: event.pathParameters?.id
        }
      }

      const result = await dynamo.get(params).promise()

      const objects = result.Item?.images.map((img) => ({
        Key: `images/${img}`
      }))

      let bucketParams = {
        Bucket: bucket, 
        Delete: {
          Objects: objects
        },
      };

      await dynamo.delete(params).promise()
      const res = await s3.deleteObjects(bucketParams).promise()

      body = {
        message: "success",
        deletedImages: res.Deleted.length
      }
    } else {
      statusCode = 400
      body = "id not found"
    }
  } catch (err) {
    statusCode = 400
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

