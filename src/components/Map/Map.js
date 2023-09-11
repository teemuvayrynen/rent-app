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
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import useUserGeoLocation from './useUserGeoLocation'
import { useRef } from 'react';


const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize: [38,38]
})

const markers = [
  {
  geocode: [60.172, 24.9591],
  popUp: "Marker 1"
  },
  {
  geocode: [60.172, 24.958],
  popUp: "Marker 2"
  },
  {
  geocode: [60.1732, 24.9595],
  popUp: "Marker 2"
  }]

  

function Map() {
  const kruununhakaCoordinates = [60.1729, 24.9591];
  const userLocation = useUserGeoLocation()
  const mapRef = useRef(null)
  const goToUserLocation = () => {
    if(userLocation.isLoaded && !userLocation.error){
        mapRef.current.flyTo([userLocation.location.lat, userLocation.location.long], 15, {animate:true, duration: 1})
     } else {
        alert(userLocation.error)
     }
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
          {markers.map(marker => {
            return (
              <Marker key={marker.geocode} position={marker.geocode} icon={customIcon}>
                <Popup>
                  {marker.popUp}
                </Popup>
              </Marker>
            )
          })}
        </MarkerClusterGroup>
        <div className='locate-me'>
            <FontAwesomeIcon icon={faLocationDot} size="3x" style={{ color: 'blue' }} onClick={goToUserLocation}/>
        </div>
      </MapContainer>
    </>
      
  )
}

export default Map;