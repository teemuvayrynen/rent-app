import { JSONSchemaType } from "ajv"

interface RentDate {
  start: string
  end: string
}

interface Location {
  lat: number
  lon: number
}

interface Images {
  id: string
}

interface ApartmentData {
  address: string
  place: string
  zip: number
  size: number
  apartmentType: string
  ownerId: string
  price: number
  images: Array<Images>
  location: Location 
}

const imagesSchema: JSONSchemaType<Images> = {
  type: "object",
  properties: {
    id: {type: "string"}
  },
  required: ["id"]
}

const locationSchema: JSONSchemaType<Location> = {
  type: "object",
  properties: {
    lat: {type: "number"},
    lon: {type: "number"}
  },
  required: ["lat", "lon"]
}

const rentDateSchema: JSONSchemaType<RentDate> = {
  type: "object",
  properties: {
    start: {type: "string"},
    end: {type: "string"}
  },
  required: ["start", "end"]
}

const apartmentSchema: JSONSchemaType<ApartmentData> = {
  type: "object",
  properties: {
    address: {type: "string"},
    place: {type: "string"},
    zip: {type: "number"},
    size: {type: "number"},
    apartmentType: {type: "string"},
    ownerId: {type: "string"},
    price: {type: "number"},
    images: {
      type: "array",
      items: imagesSchema
    },
    location: locationSchema,
    rentDate: rentDateSchema
  },
  required: [],
  additionalProperties: false
}

export const finalApartmentSchema = {
  ...apartmentSchema,
  required: Object.keys(apartmentSchema.properties)
}