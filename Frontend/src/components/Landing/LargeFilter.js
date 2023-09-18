import './largefilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function LargeFilter() {

  return (
    <div className='largefilter-container'>
      <div className='flex-column-largefilter'>
        <p>City</p>
        <input placeholder='Search places' type='text'></input>
      </div>
      <p/>
      <div className='flex-column-largefilter'>
        <p>Price</p>
        <input placeholder='Add price' type='text'  ></input>
      </div>
      <p/>
      <div className='flex-row-largefilter'>
        <FontAwesomeIcon icon={faCalendarDays} size="xl"/>
        <p>Dates</p>
      </div>
    </div>
  );
}

export default LargeFilter;