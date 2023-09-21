/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import './map.css'
import { Icon } from 'leaflet';
import LeafletgeoSearch from './LeafletSearch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import useUserGeoLocation from './useUserGeoLocation'
import { useRef, useState, useEffect } from 'react';
import ApartmentCard from '../ApartmentCard/ApartmentCard';


const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38,38]
})

const userLocationIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/9800/9800512.png",
  iconSize: [38,38]
})
 
function Map({apartments, markers, setFilteredMarkers}) {
  const kruununhakaCoordinates = [60.1729, 24.9591];
  const userLocation = useUserGeoLocation()
  const mapRef = useRef(null)
  const [mapListActive, setMapListActive] = useState(false);

  const updateBounds = (map) => {
    const newBounds = map.getBounds();
    
    const filteredMarkers = markers.filter((marker) => {
      return newBounds.contains([marker.location.lat, marker.location.lon]);
    });
    setFilteredMarkers(prev => filteredMarkers.length > 0 ? filteredMarkers : [])
  };
  
  if (mapRef.current) {
    mapRef.current.on('moveend', () => updateBounds(mapRef.current))
  }
 
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
      }, 2000);
  }}

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
    mapList.classList.toggle('active')
    setMapListActive(prev => !prev)
    }
  
  return (
    <>
      <MapContainer ref={mapRef} center={kruununhakaCoordinates} zoom={13} scrollWheelZoom={true} whenReady={(map) => {
        updateBounds(map.target)
      }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletgeoSearch/>
        {(userLocation.isLoaded && !userLocation.error) && (
          <Marker position={[userLocation.location.lat, userLocation.location.long]} icon={userLocationIcon}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
        <MarkerClusterGroup chunkedLoading>
          {markers.map((marker) => {
            return (
              <Marker key={marker.id} position={[marker.location.lat, marker.location.lon]} icon={customIcon}>
                 <Popup>
                  <img alt="cardimage" src="https://source.unsplash.com/178j8tJrNlc" width={250}/>
                  <div className='apartment-info-popup'>
                    <p>{marker.id}</p>
                    <p>{marker.price}/kk</p>
                  </div>
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
          {apartments.map((apartment, index) => {
            return <ApartmentCard key={index} apartment={apartment} goToApartmentLocation={goToApartmentLocation} mapListActive={mapListActive}/>
          })}
      </div>
    </>
      
  )
}

export default Map;