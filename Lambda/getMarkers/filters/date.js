import moment from 'moment/moment';

var formats = [
  moment.ISO_8601
];



const dateFilter = () => {
  if (event.queryStringParameters && event.queryStringParameters.startDate && event.queryStringParameters.endDate) {
    let startDate = event.queryStringParameters.startDate
    let endDate = event.queryStringParameters.endDate
    
    if (startDate === "now") {
      const date = new Date(Date.now())
      startDate = date.toJSON()
    }

    if ((endDate !== "temp" && !moment(endDate, formats, true).isValid()) || !moment(startDate, formats, true).isValid()) {
      return {
        headers,
        statusCode: 404,
        body: JSON.stringify({
          message: "Wrong date value"
        })
      }
    }

    if (endDate !== "temp" && new Date(startDate) > new Date(endDate)) {
      return {
        headers,
        statusCode: 404,
        body: JSON.stringify({
          message: "Starting date can't be after ending date"
        })
      }
    }

    let expression = params.hasOwnProperty("FilterExpression") && params.FilterExpression.length !== 0 ? params.FilterExpression : ""
    let attributes;
    const newAttr = {
      ":startDate": startDate,
      ":endDate": endDate,
      ":temp": "temp"
    }
    
    if (endDate !== "temp") {
      expression = expression.length !== 0 
      ? expression + " AND #ed <> :temp AND #sd <= :startDate AND #ed >= :endDate" 
      : "#ed <> :temp AND #sd <= :startDate AND #ed >= :endDate"
      attributes = params.hasOwnProperty("ExpressionAttributeValues") ? {
        ...params.ExpressionAttributeValues,
        ...newAttr
      } : { ...newAttr }
    } else {
      expression = expression.length !== 0 
      ? expression + " AND #ed = :temp AND #sd <= :startDate" 
      : "#ed = :temp AND #sd <= :startDate"
      attributes = params.hasOwnProperty("ExpressionAttributeValues") ? {
        ...params.ExpressionAttributeValues,
        ":startDate": startDate,
        ":temp": "temp"
      } : { 
        ":startDate": startDate,
        ":temp": "temp"
      }
    }

    params = {
      ...params,
      FilterExpression: expression,
      ExpressionAttributeValues: attributes,
      ExpressionAttributeNames: {
        ...params.ExpressionAttributeNames,
        "#sd": "startDate",
        "#ed": "endDate"
      }
    }
  }
}