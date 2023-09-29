const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')
import * as fileType from "file-type"
import Ajv from "ajv"
import { finalApartmentSchema } from "./schema";
import { ApartmentData } from "./schema";

const ajv = new Ajv()
const dynamo = new AWS.DynamoDB.DocumentClient()
const s3 = new AWS.S3()

const validate = ajv.compile(finalApartmentSchema)

interface JSONSchema {
  apartment: ApartmentData,
  images: Array<string>
}

const mimes = [
  "image/png",
  "image/jpeg",
  "image/jpg"
]


export async function handler(event) {
  let body;
  let statusCode = 200;

  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const data: JSONSchema = JSON.parse(event.body)

    if (validate(data.apartment)) {
      let images: Array<any> = []

      if (data.images.length > 0) {
        for (let i in data.images) {
          const imgURI = data.images[i]
          var regex = /^data:(.+\/.+);base64,(.*)$/;
          var matches = imgURI.match(regex);
          if (matches !== null && matches.length >= 3) {
            if (!mimes.includes(matches[1])) {
              return {
                statusCode: 405,
                body: "mime not supported"
              }
            }
            const id = uuidv4()

            const buffer = Buffer.from(matches[2], 'base64')
            const fileInfo = await fileType.fileTypeFromBuffer(buffer)
            const detectedExt = fileInfo?.ext
            const detectedMime = fileInfo?.mime

            if (detectedMime !== matches[1]) {
              return {
                statusCode: 405,
                body: "mime types don't match"
              }
            }

            const key = `images/${id}.${detectedExt}`

            await s3.putObject({
              Bucket: "s3-image-bucket-apartments",
              Key: key,
              Body: buffer,
              ContentType: matches[1 ]
            }).promise()

            images.push({
              id: id
            })
          }
        }
      }

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