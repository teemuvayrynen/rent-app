import React, {useState} from 'react';

function useDateRange() {

    function formatDateToCustomString(date) {
        const day = date.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if needed
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Get the month (months are zero-based) and pad with leading zero if needed
        const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
      
        return `${day}.${month}.${year}`;
      }

    const [dateRange, setDateRange] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection',
          isSet: false
        }
      ]);

    return [dateRange, setDateRange, formatDateToCustomString]
}

export default useDateRange;