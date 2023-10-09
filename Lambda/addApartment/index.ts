const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
import * as fileType from "file-type"
import Ajv from "ajv"
import { finalApartmentSchema } from "./schema";
import { ApartmentData } from "./schema";

const ajv = new Ajv()
const dynamo = new AWS.DynamoDB.DocumentClient()
const s3 = new AWS.S3()


const bucket = "s3-image-bucket-apartments"

const validate = ajv.compile(finalApartmentSchema)

interface JSONSchema {
  apartment: ApartmentData
  images: Array<string>
  federatedId: string
}

export async function handler(event) {
  let body;
  let statusCode = 200;

  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const data: JSONSchema = JSON.parse(event.body)

    if (validate(data.apartment) && data.federatedId) {
      let images: Array<string> = []

      if (data.images.length > 0) {
        for (let i in data.images) {
          const img = data.images[i]
          
          await s3.headObject({ Bucket: bucket, Key: `private/${data.federatedId}/${img}` }).promise();

          const params = {
            Bucket: bucket,
            Key: `images/${img}`,
            CopySource: `${bucket}/private/${data.federatedId}/${img}`
          }

          await s3.copyObject(params).promise()

          const deleteObjectParams = {
            Bucket: bucket,
            Key: `private/${data.federatedId}/${img}`
          }

          await s3.deleteObject(deleteObjectParams).promise();

          images.push(img)
        }
      }

      if (data.apartment.startDate === "") {
        data.apartment.startDate = new Date().toISOString()
      }

      data.apartment.created = new Date().toISOString()
      
      const params = {
        TableName: "dynamo-apartment-storage",
        Item: {
          id: uuidv4(),
          images: images,
          ...data.apartment
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