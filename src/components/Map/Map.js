"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import 'node_modules/leaflet-geosearch/dist/geosearch.css';
import './map.css'
import { Icon } from 'leaflet';
import LeafletgeoSearch from './LeafletSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import useUserGeoLocation from './useUserGeoLocation'
import { useRef, useState } from 'react';
import apartmentData from '../../../apartmentData.json'
import ApartmentCard from '../ApartmentCard/ApartmentCard';


const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38,38]
})

const apartmentMarkers = apartmentData.map(apartment => {
  return apartment.location
})  

function Map() {
  const [previousMarker, setPreviousMarker] = useState(null)
  const kruununhakaCoordinates = [60.1729, 24.9591];
  const userLocation = useUserGeoLocation()
  const mapRef = useRef(null)

  const goToUserLocation = () => {
    if(userLocation.isLoaded && !userLocation.error){
        mapRef.current.flyTo([userLocation.location.lat, userLocation.location.long], 15, {animate:true, duration: 1})
     }
  }


  const goToApartmentLocation = (apartment) => {
    if (mapRef.current) {
      mapRef.current.flyTo(apartment.location, 16, { animate: true, duration: 1 });
  
      setTimeout(() => {
        mapRef.current.eachLayer(function (layer) {
          if (layer instanceof L.Marker && layer.getLatLng().equals(apartment.location)) {
            const markerElement = layer.getElement();
            markerElement.click();
          }
        });
      }, 2000); // Delay the click action for 100 milliseconds
    }
  };

  const widenMap = () => {
    const map = document.querySelector('.leaflet-container')
    const widenButton = document.querySelector('.open-me')
    const container = document.querySelector('.footer-container');
    container.classList.toggle('show');
    widenButton.classList.toggle('active')
    map.classList.toggle('active')
    document.querySelector('.flex-container').classList.toggle('disabled')
    setTimeout(() => {mapRef.current.invalidateSize()}, 500)
    const mapList = document.querySelector('.map-apartment-list')
    const apartmentCards = document.querySelectorAll('.card-container')
    apartmentCards.forEach(apartmentCard => apartmentCard.classList.toggle('map'))
    mapList.classList.toggle('active')
    }
  
  return (
    <>
      <MapContainer ref={mapRef} center={kruununhakaCoordinates} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletgeoSearch/>
        <MarkerClusterGroup chunkedLoading>
          {apartmentMarkers.map((marker, index) => {
            return (
              <Marker key={index} position={marker} icon={customIcon}>
                <Popup>
                  Marker
                </Popup>
              </Marker>
            )
          })}
        </MarkerClusterGroup>
        <div className='locate-me'>
            <FontAwesomeIcon icon={faLocationDot} size="3x" style={{ color: 'blue' }} onClick={goToUserLocation}/>
        </div>
        <div className='open-me'>
        <FontAwesomeIcon icon={faCircleChevronDown} size="3x" style={{ color: 'blue' }} onClick={widenMap}/>
        </div>
      </MapContainer>
      <div className='map-apartment-list'>
          {apartmentData.map((apartment, index) => {
            return <ApartmentCard key={index} apartment={apartment} handleClick={goToApartmentLocation}/>
          })}
      </div>
    </>
      
  )
}

export default Map;