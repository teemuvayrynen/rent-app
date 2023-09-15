import './apartmentCard.css'
import Image from 'next/image'

function ApartmentCard({apartment, goToApartmentLocation}) {

    const handleApartmentClick = (apartment) => {
        const mapList = document.querySelector('.map-apartment-list');
        if (mapList.classList.contains('active')) {
          goToApartmentLocation(apartment)
        } else {
          console.log('.map-apartment-list is not active');
        }
      }

    return (
        <div className='card-container' onClick={() => handleApartmentClick(apartment)}>
            <div className='image-container'>
                <Image alt="cardimage" src="https://source.unsplash.com/178j8tJrNlc" width={700} height={300} className="card-image"/>
            </div>
            <div className='apartment-info'>
                <p>{apartment.address}</p>
                <p>{apartment.price}/kk &emsp; {apartment.size}</p>
                <p>{apartment.rentDate.start} - {apartment.rentDate.end}</p>
            </div>
            
        </div>
    );
}

export default ApartmentCard;