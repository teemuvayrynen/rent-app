import { JSONSchemaType } from "ajv"
import { 
  Location, 
  Rules, 
  ApartmentData, 
  Kitchen, 
  Bathroom,
  Utility,
  Electronics,
  Other,
  Premises
} from "./interface"

const locationSchema: JSONSchemaType<Location> = {
  type: "object",
  properties: {
    lat: {type: "number"},
    lon: {type: "number"}
  },
  required: ["lat", "lon"]
}

const rulesSchema: JSONSchemaType<Rules> = {
  type: "object",
  properties: {
    pets: {type: "boolean"},
    smoking: {type: "boolean"},
    unobstructed: {type: "boolean"}
  },
  required: ["pets", "smoking", "unobstructed"]
}

const kitchenSchema: JSONSchemaType<Kitchen> = {
  type: "object",
  properties: {
    fridge: {type: "boolean"},
    freezer: {type: "boolean"},
    owen: {type: "boolean"},
    stove: {type: "boolean"},
    dishwasher: {type: "boolean"},
    microwave: {type: "boolean"}
  },
  required: ["fridge", "freezer", "owen", "stove", "dishwasher", "microwave"]
}

const bathroomSchema: JSONSchemaType<Bathroom> = {
  type: "object",
  properties: {
    shower: {type: "boolean"},
    wc: {type: "boolean"},
    bath: {type: "boolean"}
  },
  required: ["shower", "wc", "bath"]
}

const utilitySchema: JSONSchemaType<Utility> = {
  type: "object",
  properties: {
    washing_machine: {type: "boolean"},
    dryer: {type: "boolean"},
    laundry: {type: "boolean"}
  },
  required: ["washing_machine", "dryer", "laundry"]
}

const electronicsSchema: JSONSchemaType<Electronics> = {
  type: "object",
  properties: {
    internet: {type: "boolean"},
    tv: {type: "boolean"}
  },
  required: ["internet", "tv"]
}

const otherSchema: JSONSchemaType<Other> = {
  type: "object",
  properties: {
    sauna: {type: "boolean"},
    fireplace: {type: "boolean"},
    pool: {type: "boolean"},
    furnished: {type: "boolean"},
    balcony: {type: "boolean"}
  },
  required: ["sauna", "fireplace", "pool", "furnished", "balcony"]
}

const premisesSchema: JSONSchemaType<Premises> = {
  type: "object",
  properties: {
    elevator: {type: "boolean"},
    bike_storage: {type: "boolean"},
    storage: {type: "boolean"},
    parking: {type: "boolean"},
    recycle_point: {type: "boolean"}
  },
  required: ["elevator", "bike_storage", "storage", "parking", "recycle_point"]
}


const apartmentSchema: JSONSchemaType<ApartmentData> = {
  type: "object",
  properties: {
    country: {type: "string"},
    street_name: {type: "string"},
    street_number: {type: "string"},
    apt: {type: "string"},
    floor: {type: "string"},
    city: {type: "string"},
    zip: {type: "string"},
    size: {type: "number"},
    roomAmount: {type: "number"},
    apartmentType: {type: "string"},
    ownerId: {type: "string"},
    ownerName: {type: "string"},
    monthlyPrice: {type: "number"},
    waterPrice: {type: "number"},
    deposit: {type: "number"},
    description: {type: "string"},
    startDate: {type: "string"},
    endDate: {type: "string"},
    created: {type: "string"},
    building_society: {type: "string"},
    status: {type: "number"},
    location: locationSchema,
    rules: rulesSchema,
    equipment: {
      type: "object",
      properties: {
        kitchen: kitchenSchema,
        bathroom: bathroomSchema,
        utility: utilitySchema,
        electronics: electronicsSchema,
        other: otherSchema,
        premises: premisesSchema
      },
      required: [
        "kitchen",
        "bathroom",
        "utility",
        "electronics",
        "other",
        "premises"
      ]
    }
  },
  required: [],
  additionalProperties: false
}

export const finalApartmentSchema = {
  ...apartmentSchema,
  required: Object.keys(apartmentSchema.properties ? apartmentSchema.properties : [])
}

export type { ApartmentData as ApartmentData }