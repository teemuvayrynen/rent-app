
const priceFilter = () => {
  if (event.queryStringParameters && event.queryStringParameters.price) {
    const price = event.queryStringParameters.price
  
    if (isNaN(price)) {
      return {
        headers,
        statusCode: 404,
        body: JSON.stringify({
          message: "Only numbers allowed"
        })
      }
    }
  
    let filter = {
      FilterExpression: "price <= :maxPrice",
      ExpressionAttributeValues: {
        ":maxPrice": Number(price)
      }
    }
    params = {
      ...params,
      ...filter
    }
  }
}