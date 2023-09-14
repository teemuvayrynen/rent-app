import './filter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1, faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Filter() {
    
    const showPriceInput = () => {
        const rangeElement = document.querySelector('.price-range')
        rangeElement.classList.toggle('active')
    }

    const showCalendar = () => {
        const rangeElement = document.querySelector('.calendar')
        rangeElement.classList.toggle('active')
    }
    return (
        <div className='filter-container'>
            <div className='filter price-filter' onClick={showPriceInput}>
                <FontAwesomeIcon icon={faMoneyBill1} size="1x"/>
                <p>Price</p>
            </div>
            <span></span>
            <div className='filter date-filter' onClick={showCalendar}>
                <FontAwesomeIcon icon={faCalendarDays} size="1x"/>
                <p>Date</p>
            </div>
        </div>
    );
}

export default Filter;