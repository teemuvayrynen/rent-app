import { JSONSchemaType } from "ajv"

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
  zip: string
  size: number
  apartmentType: string
  ownerId: string
  price: number
  images: Array<Images>
  location: Location
  description: string
  startDate: string
  endDate: string
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

const apartmentSchema: JSONSchemaType<ApartmentData> = {
  type: "object",
  properties: {
    address: {type: "string"},
    place: {type: "string"},
    zip: {type: "string"},
    size: {type: "number"},
    apartmentType: {type: "string"},
    ownerId: {type: "string"},
    price: {type: "number"},
    images: {
      type: "array",
      items: imagesSchema
    },
    location: locationSchema,
    description: {type: "string"},
    startDate: {type: "string"},
    endDate: {type: "string"}
  },
  required: [],
  additionalProperties: false
}

export const finalApartmentSchema = {
  ...apartmentSchema,
  required: Object.keys(apartmentSchema.properties ? apartmentSchema.properties : [])
}

export type { ApartmentData as ApartmentData }