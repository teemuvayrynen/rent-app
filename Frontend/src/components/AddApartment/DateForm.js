import React, {useEffect} from 'react';

function DateForm({apartmentData, handleUpdate}) {

    useEffect(() => {
        if(apartmentData['startDate'] !== ""){
            if(apartmentData['startDate'] === "now"){
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
        }
        if(apartmentData['endDate'] !== ""){
            if(apartmentData['endDate'] === "-"){
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
        }
    }, [])
   
    const setDate = (className, parent, key, value) => {
        const parentContainer = document.querySelectorAll(parent)

        parentContainer.forEach(div => {
            div.style.background = '#F5F5F5'
            div.style.color = 'black'
        })
        const div = document.querySelector(className)
        div.style.background = '#E85252'
        div.style.color = 'white'
        handleUpdate(key, value)
    }

    return (
        <>
            <h2>Start and end date for rental</h2>
            <div className="form-wrapper-column">
                <div className='start-date'>
                    <label>Rental starts</label>
                    <div className='now' onClick={() => setDate('.start-date .now', '.start-date > div', 'startDate', new Date())}>
                        <p>Right away</p>
                    </div>
                    <div className='later' onClick={() => setDate('.start-date .later', '.start-date > div', 'startDate', 'TODO')}>
                        <p>Choose date</p>
                    </div>
                </div>
                <div className='end-date'>
                    <label>Rental ends</label>
                    <div className='now' onClick={() => setDate('.end-date .now', '.end-date > div', 'endDate', '-')}>
                        <p>Open-ended</p>
                    </div>
                    <div className='later' onClick={() => setDate('.end-date .later', '.end-date > div', 'endDate', 'TODO')}>
                        <p>Choose date</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateForm;