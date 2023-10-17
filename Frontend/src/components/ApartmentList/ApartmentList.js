import { useState } from 'react';
import './apartmentList.css';
import ApartmentCard from '../ApartmentCard/ApartmentCard';

function ApartmentList({ apartments, setHoveredMarkerID }) {
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((prev) => prev + 3);
  };

  return (
    (apartments) ? (
      <div className='flex-container'>
        <div className='apartment-list'>
          <div className='grid-container'>
            {apartments.slice(0, visible).map((apartment, index) => (
              <ApartmentCard key={apartment.id} apartment={apartment} setHoveredMarkerID={setHoveredMarkerID}/>
            ))}
          </div>
        </div>
        {visible < apartments.length && (
          <button
            onClick={showMore}
            style={{ margin: "2rem 0", display: (visible === apartments.length - 1) ? 'none' : 'block' }}
          >
            Show more
          </button>
        )}
      </div>
    ) : (
      <p>Loading</p>
    )
  );
}

export default ApartmentList;
