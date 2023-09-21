import './largefilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import useDateRange from '@/hooks/useDateRange';
import { DateRange } from 'react-date-range';
import { useEffect } from 'react';

const showCalendar = () => {
  const rangeElement = document.querySelector('.landing-calendar')
  rangeElement.classList.toggle('active')
}

function LargeFilter({cityRef, priceRef, dateRef}) {
  const [dateRange, setDateRange, formatDateToCustomString] = useDateRange()

  useEffect(() => {
    if(dateRange[0].isSet){
      const rangeElement = document.querySelector('.flex-row-largefilter')
      const formattedStartDate = formatDateToCustomString(dateRange[0].startDate)
      const formattedEndDate = formatDateToCustomString(dateRange[0].endDate)
      rangeElement.textContent = `${formattedStartDate} - ${formattedEndDate}`
  
  }
  }, [dateRange])

  return (
    <div className='largefilter-container'>
      <div className='flex-column-largefilter'>
        <p>City</p>
        <input ref={cityRef} placeholder='Search places' type='text'></input>
      </div>
      <p/>
      <div className='flex-column-largefilter'>
        <p>Price</p>
        <input ref={priceRef} placeholder='Add price' type='text'  ></input>
      </div>
      <p/>
      <div ref={dateRef} className='flex-row-largefilter' onClick={showCalendar}>
        <FontAwesomeIcon icon={faCalendarDays} size="xl"/>
        <p>Dates</p>
      </div>
      <DateRange
        className="landing-calendar"
        editableDateInputs={true}
        onChange={item => setDateRange([{...item.selection, isSet: true}])}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
    </div>
  );
}

export default LargeFilter;