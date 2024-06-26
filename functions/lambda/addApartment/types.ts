export type Location = {
  lat: number
  lon: number
}

export type Rules = {
  pets: boolean
  smoking: boolean
  unobstructed: boolean
}

export type Kitchen = {
  fridge: boolean
  freezer: boolean
  owen: boolean
  stove: boolean
  dishwasher: boolean
  microwave: boolean
}

export type Bathroom = {
  shower: boolean
  wc: boolean
  bath: boolean
}

export type Utility = {
  washing_machine: boolean
  dryer: boolean
  laundry: boolean
}

export type Electronics = {
  internet: boolean
  tv: boolean
}

export type Other = {
  sauna: boolean
  fireplace: boolean
  pool: boolean
  furnished: boolean
  balcony: boolean
}

export type Premises = {
  elevator: boolean
  bike_storage: boolean
  storage: boolean
  parking: boolean
  recycle_point: boolean
}

export type ApartmentData = {
  country: string
  street_name: string
  street_number: string
  apt: string
  floor: string
  city: string
  zip: string
  size: number
  apartmentType: string
  ownerId: string
  ownerName: string
  monthlyPrice: number
  waterPrice: number
  deposit: number
  description: string
  startDate: string
  endDate: string
  created: string
  building_society: string
  status: number
  location: Location
  rules: Rules
  equipment: {
    kitchen: Kitchen
    bathroom: Bathroom
    utility: Utility
    electronics: Electronics
    other: Other
    premises: Premises
  }
}