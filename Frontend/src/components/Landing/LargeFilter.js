import './largefilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import useDateRange from '@/hooks/useDateRange';
import { DateRange } from 'react-date-range';
import { useState } from 'react';

const showCalendar = () => {
  const rangeElement = document.querySelector('.landing-calendar')
  rangeElement.classList.toggle('active')
}

function LargeFilter({cityRef, priceRef, dateRef}) {
  const [dateRange, setDateRange, formatDateToCustomString] = useDateRange()
  const [emptyDate, setEmptyDate] = useState(false)

  const handleDateChange = (ranges) => {
    setDateRange([{...ranges.selection, isSet: true}])
    setEmptyDate(prev => true)
}

const clearDate = () => {
  setDateRange(prev => ([{startDate: new Date(), endDate: null, isSet: false, key: 'selection'}]))
}

  return (
    <div className='largefilter-container'>
      <div className='flex-column-largefilter'>
        <p>City</p>
        <input ref={cityRef} placeholder='Search places' type='text'></input>
      </div>
      <p/>
      <div className='flex-column-largefilter'>
        <p>Max price</p>
        <input ref={priceRef} placeholder='Add price' type='text'  ></input>
      </div>
      <p/>
      {dateRange[0].isSet === false  ? (
            <div className='flex-row-largefilter' onClick={showCalendar}>
              <FontAwesomeIcon icon={faCalendarDays} size="xl" />
              <p>Dates</p>
            </div>
            ) : (dateRange[0].startDate && dateRange[0].endDate) ? (
              
              <div className='flex-row-largefilter'>
                <p ref={dateRef} onClick={showCalendar}>{formatDateToCustomString(dateRange[0].startDate)} - {formatDateToCustomString(dateRange[0].endDate)}</p>
                <div className='clear-date-filter' onClick={clearDate} style={{display: (emptyDate) ? 'flex': 'none'}}>
                  <span className="x-span"></span>
                  <span className="x-span"></span>
                </div>
              </div>
            ) : null}
      <DateRange
        className="landing-calendar"
        editableDateInputs={true}
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
    </div>
  );
}

export default LargeFilter;