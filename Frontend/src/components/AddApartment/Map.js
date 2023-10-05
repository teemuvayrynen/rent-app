"use client"

import React from 'react';
import { MapContainer, TileLayer, Circle, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-geosearch/dist/geosearch.css';
import LeafletgeoSearch from '../Map/LeafletSearch'

function Map({circle, setCircle, handleUpdate}) {

    function AddMarkerToMap() {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                const newCircle = {
                    lat,
                    lng,
                  };

                  setCircle(prev => newCircle)
                  handleUpdate('location', {
                    lat: lat,
                    lng: lng
                  })
            }
        })
        return null
    }
    return (
        <MapContainer center={[60.1729, 24.9591]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <LeafletgeoSearch/>
            <AddMarkerToMap />
            {circle && <Circle  center={[circle.lat, circle.lng]} radius={80} fillColor="lightblue" fillOpacity={0.6}>
            {/* You can add additional content or popups to the markers here */}
            </Circle>}
        </MapContainer>
    );
}

export default Map;