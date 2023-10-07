import React, {useEffect, useState} from 'react';
import { Calendar } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import useDateRange from '@/hooks/useDateRange';

const showCalendar = (key) => {
    if(key === "startDate") {
        const rangeElement = document.querySelector('.calendar')
        rangeElement.classList.toggle('active')
        return
    }
    const rangeElement = document.querySelector('.calendar-end')
    rangeElement.classList.toggle('active')
    
  }

function DateForm({apartmentData, handleUpdate}) {
    const [dateRange, setDateRange, formatDateToCustomString, formatDateRangeForQuery] = useDateRange()
    const [newStartDate, setNewStartDate] = useState(apartmentData['startDate']);
    const [isRightAway, setIsRightAway] = useState(apartmentData['startDate'] === '' ? true : false)
    const [isOpenEnded, setIsOpenEnded] = useState(apartmentData['endDate'] === '' ? true : false)
    const [newEndDate, setNewEndDate] = useState(apartmentData['endDate']);
    const locale = locales['fi']

    useEffect(() => {
        
        if(isRightAway){
            const div = document.querySelector('.start-date .now')
            if(div){
                div.style.background = '#E85252'
                div.style.color = 'white'
            }
        }
        else {
            const div = document.querySelector('.start-date .later')
            if(div){
                div.style.background = '#E85252'
                div.style.color = 'white'
            }
        }
        
    
        if(isOpenEnded){
            const div = document.querySelector('.end-date .now')
            if(div){
                div.style.background = '#E85252'
                div.style.color = 'white'
            }
        }
        else {
            const div = document.querySelector('.end-date .later')
            if(div){
                div.style.background = '#E85252'
                div.style.color = 'white'
            }
        }
        
    }, [])

    useEffect(() => {
        handleUpdate('startDate', newStartDate)
    }, [newStartDate])

    useEffect(() => {
        handleUpdate('endDate', newEndDate)
    }, [newEndDate])
   
    const setDate = (className, parent, key, value) => {
        const parentContainer = document.querySelectorAll(parent)
        parentContainer.forEach(div => {
            div.style.background = '#F5F5F5'
            div.style.color = 'black'
        })
        const div = document.querySelector(className)
        div.style.background = '#E85252'
        div.style.color = 'white'
        if(value === 'TODO'){
            showCalendar(key)
            return
        }
        handleUpdate(key, value)
    }

    return (
        <>
            <h2>Start and end date for rental</h2>
            <div className="form-wrapper-column">
                <div className='start-date'>
                    <label>Rental starts</label>
                    <div className='now' onClick={() => {
                        setIsRightAway(prev => true)
                        setDate('.start-date .now', '.start-date > div', 'startDate', '')}}>
                        <p>Right away</p>
                    </div>
                    <div className='later' onClick={() => setDate('.start-date .later', '.start-date > div', 'startDate', 'TODO')}>
                        {newStartDate !== '' && !isRightAway ? formatDateToCustomString(newStartDate) : <p>Choose date</p>}
                        <div className='calendar' style={{background: 'initial !important'}}>
                            <Calendar onChange={item => {
                                const date = new Date(item);
                                date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                                const isoDateString = date.toISOString();
                                setIsRightAway(prev => false)
                                setNewStartDate(prev => isoDateString)}}
                            locale={locale} date={newStartDate !== '' ? new Date(newStartDate) : null} />
                        </div>
                    </div>
                </div>
                <div className='end-date'>
                    <label>Rental ends</label>
                    <div className='now' onClick={() => {
                        setIsOpenEnded(true)
                        setDate('.end-date .now', '.end-date > div', 'endDate', '')}}>
                        <p>Open-ended</p>
                    </div>
                    <div className='later' onClick={() => setDate('.end-date .later', '.end-date > div', 'endDate', 'TODO')}>
                    {newEndDate !== '' && !isOpenEnded ? formatDateToCustomString(newEndDate) : <p>Choose date</p>}
                        <div className='calendar-end' style={{background: 'initial !important'}}>
                            <Calendar onChange={item => {
                                const date = new Date(item);
                                date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
                                const isoDateString = date.toISOString();
                                setIsOpenEnded(false)
                                setNewEndDate(prev => isoDateString)}}
                            locale={locale} date={newEndDate !== '' ? new Date(newEndDate) : null} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateForm;