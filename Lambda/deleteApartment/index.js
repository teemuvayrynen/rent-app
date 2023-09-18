const data = [
  {
    "id": 1,
    "address": "Otaniementie 12, Espoo",
    "size": "65m2",
    "rentDate": {
      "start": "1.3.23",
      "end": "31.8.23"
    },
    "owner": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phoneNumber": "+1 (123) 456-7890"
    },
    "location": [60.185181, 24.823607],
    "images": [],
    "price": 1200
  },
  {
    "id": 2,
    "address": "Espoonlahdentie 5, Espoo",
    "size": "72m2",
    "rentDate": {
      "start": "15.5.23",
      "end": "14.11.23"
    },
    "owner": {
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "phoneNumber": "+1 (234) 567-8901"
    },
    "location": [60.160374, 24.670049],
    "images": [],
    "price": 1500
  },
  {
    "id": 3,
    "address": "Hietalahdentori 16, Helsinki",
    "size": "50m2",
    "rentDate": {
      "start": "28.2.23",
      "end": "29.8.23"
    },
    "owner": {
      "name": "Michael Johnson",
      "email": "michaeljohnson@example.com",
      "phoneNumber": "+1 (345) 678-9012"
    },
    "location": [60.164930, 24.920160],
    "images": [],
    "price": 1100
  },
  {
    "id": 4,
    "address": "Bulevardi 40, Helsinki",
    "size": "80m2",
    "rentDate": {
      "start": "20.4.23",
      "end": "19.10.23"
    },
    "owner": {
      "name": "Emily Davis",
      "email": "emilydavis@example.com",
      "phoneNumber": "+1 (456) 789-0123"
    },
    "location": [60.163019, 24.938271],
    "images": [],
    "price": 1350
  },
  {
    "id": 5,
    "address": "Kaivokatu 8, Helsinki",
    "size": "68m2",
    "rentDate": {
      "start": "1.6.23",
      "end": "30.11.23"
    },
    "owner": {
      "name": "David Wilson",
      "email": "davidwilson@example.com",
      "phoneNumber": "+1 (567) 890-1234"
    },
    "location": [60.169815, 24.945389],
    "images": [],
    "price": 1600
  },
  {
    "id": 6,
    "address": "Lönnrotinkatu 12, Helsinki",
    "size": "55m2",
    "rentDate": {
      "start": "10.5.23",
      "end": "9.11.23"
    },
    "owner": {
      "name": "Alice Lee",
      "email": "alicelee@example.com",
      "phoneNumber": "+1 (678) 901-2345"
    },
    "location": [60.169529, 24.937668],
    "images": [],
    "price": 1400
  },
  {
    "id": 7,
    "address": "Kaisaniemenkatu 3, Helsinki",
    "size": "60m2",
    "rentDate": {
      "start": "15.2.23",
      "end": "14.8.23"
    },
    "owner": {
      "name": "James Anderson",
      "email": "jamesanderson@example.com",
      "phoneNumber": "+1 (789) 012-3456"
    },
    "location": [60.173491, 24.947693],
    "images": [],
    "price": 1150
  },
  {
    "id": 8,
    "address": "Erottajankatu 5, Helsinki",
    "size": "75m2",
    "rentDate": {
      "start": "5.3.23",
      "end": "4.9.23"
    },
    "owner": {
      "name": "Susan Martin",
      "email": "susanmartin@example.com",
      "phoneNumber": "+1 (890) 123-4567"
    },
    "location": [60.165968, 24.947409],
    "images": [],
    "price": 1250
  },
  {
    "id": 9,
    "address": "Uudenmaankatu 9, Helsinki",
    "size": "70m2",
    "rentDate": {
      "start": "25.5.23",
      "end": "24.11.23"
    },
    "owner": {
      "name": "Robert White",
      "email": "robertwhite@example.com",
      "phoneNumber": "+1 (901) 234-5678"
    },
    "location": [60.167235, 24.951593],
    "images": [],
    "price": 1550
  },
  {
    "id": 10,
    "address": "Fredrikinkatu 18, Helsinki",
    "size": "62m2",
    "rentDate": {
      "start": "20.2.23",
      "end": "19.8.23"
    },
    "owner": {
      "name": "Karen Clark",
      "email": "karenclark@example.com",
      "phoneNumber": "+1 (012) 345-6789"
    },
    "location": [60.160654, 24.942426],
    "images": [],
    "price": 1300
  },
  {
    "id": 11,
    "address": "Pohjoinen Rautatiekatu 21, Helsinki",
    "size": "73m2",
    "rentDate": {
      "start": "10.6.23",
      "end": "9.12.23"
    },
    "owner": {
      "name": "William Turner",
      "email": "williamturner@example.com",
      "phoneNumber": "+1 (123) 456-7890"
    },
    "location": [60.170689, 24.947203],
    "images": [],
    "price": 1650
  },
  {
    "id": 12,
    "address": "Bulevardi 22, Helsinki",
    "size": "58m2",
    "rentDate": {
      "start": "15.3.23",
      "end": "14.9.23"
    },
    "owner": {
      "name": "Linda Harris",
      "email": "lindaharris@example.com",
      "phoneNumber": "+1 (234) 567-8901"
    },
    "location": [60.165762, 24.937944],
    "images": [],
    "price": 1450
  }
]

export async function handler() {

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

