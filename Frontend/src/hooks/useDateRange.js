import React, {useState} from 'react';

export function formatDateRangeForQuery(dateRange) {
  const [startDateStr, endDateStr] = dateRange.split(' - ');
  let [startDay, startMonth, startYear] = startDateStr.split('.');
  let [endDay, endMonth, endYear] = endDateStr.split('.');
  startDay = (parseInt(startDay) + 1).toString()
  endDay = (parseInt(endDay) + 1).toString()
  const startDate = new Date(`${startYear}`, startMonth - 1, startDay).toISOString();
  const endDate = new Date(`${endYear}`, endMonth - 1, endDay).toISOString();
  return `startDate=${startDate}&endDate=${endDate}`;
}

function useDateRange() {

    function formatDateToCustomString(date) {
      const newdate = new Date(date);
    
      // Format the date parts
      const dateFormatted = `${newdate.toLocaleString('default', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
      })}`;
     
      return dateFormatted;
      }

    const [dateRange, setDateRange] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection',
          isSet: false
        }
      ]);

    return [dateRange, setDateRange, formatDateToCustomString, formatDateRangeForQuery]
}

export default useDateRange;