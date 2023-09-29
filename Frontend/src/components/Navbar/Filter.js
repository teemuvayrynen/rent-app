import './filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import useDateRange from '@/hooks/useDateRange';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const showCalendar = () => {
  const rangeElement = document.querySelector('.calendar')
  rangeElement.classList.toggle('active')
}

function Filter() {
    const [dateRange, setDateRange, formatDateToCustomString, formatDateRangeForQuery] = useDateRange()
    const [emptyDate, setEmptyDate] = useState(false)
    const searchParams = useSearchParams()
    const oldPrice = searchParams.get("price")
    const oldStartDate = searchParams.get("startDate")
    const oldEndDate = searchParams.get("endDate")
    const oldDate = useRef()

    useEffect(() => {
      if(oldPrice !== '') {
        const priceInput = document.querySelector('.flex-column-largefilter > input')
        priceInput.value = oldPrice
      }

      if(oldStartDate){
        setDateRange([{startDate: new Date(oldStartDate.replace(/-/g, '\/').replace(/T.+/, '')),
        endDate: new Date(oldEndDate.replace(/-/g, '\/').replace(/T.+/, '')), isSet: true, key: 'selection'}])
        setEmptyDate(prev => true)
      }
    }, [])

    const handleClick = () => {
      const rangeElement = document.querySelector('.filter-section .flex-row-largefilter')
      let dateQuery = ''
      if(rangeElement.textContent !== "Dates"){
          dateQuery = formatDateRangeForQuery(rangeElement.textContent)
      }
      const priceInput = document.querySelector('.flex-column-largefilter > input')
      const priceQuery = (priceInput.value) ? `price=${priceInput.value}` : ''
      if(priceQuery !== '' || dateQuery !== ''){
        const params = `?${priceQuery}&${dateQuery}`
        const newURL = `${window.location.pathname}${params}`;
        window.location.href = newURL
      }
      else{
        window.history.replaceState({}, document.title, window.location.pathname);
        window.location.reload()
      }
    }

    const handleDateChange = (ranges) => {
        setEmptyDate(prev => true)
        oldDate.current.props.ranges[0].startDate = ranges.selection.startDate
        oldDate.current.props.ranges[0].endDate = ranges.selection.endDate
        setDateRange([{...ranges.selection, isSet: true}])
    }

    const clearDate = () => {
      oldDate.current.props.ranges[0].startDate = new Date()
      oldDate.current.props.ranges[0].endDate = null
      oldDate.current.props.ranges[0].isSet = false
      setDateRange(prev => ([{startDate: new Date(), endDate: null, isSet: false, key: 'selection'}]))
    }
    
    return (
      <div className='filter-section'>
        <div className='search-largefilter-container'>
          <div className='flex-column-largefilter'>
            <p>Max price</p>
            <input placeholder='Add price' type='text'></input>
          </div>
          <p></p>
          <DateRange
            ref={oldDate}
            cleanable={true}
            className="calendar"
            editableDateInputs={true}
            onChange={handleDateChange}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
          {dateRange[0].isSet === false  ? (
            <div className='flex-row-largefilter' onClick={showCalendar}>
              <FontAwesomeIcon icon={faCalendarDays} size="xl" />
              <p>Dates</p>
            </div>
            ) : (dateRange[0].startDate && dateRange[0].endDate) ? (
              
              <div className='flex-row-largefilter'>
                <p onClick={showCalendar}>{formatDateToCustomString(dateRange[0].startDate)} - {formatDateToCustomString(dateRange[0].endDate)}</p>
                <div className='clear-date-filter' onClick={clearDate} style={{display: (emptyDate) ? 'flex': 'none'}}>
                  <span className="x-span"></span>
                  <span className="x-span"></span>
                </div>
              </div>
            ) : null}
          </div>
          
          <button onClick={handleClick} className='basic-button'>Search</button>
      </div>
      
    );
  }

export default Filter;