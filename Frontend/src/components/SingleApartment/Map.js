"use client"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';  /* Mandatory import with react-leaflet */
import './Map.css'
import { Icon } from 'leaflet';

function Map({ position }) {
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38,38]
        })

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className='map'>
            <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors'
            url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
            />
            <Marker position={position} icon={customIcon}>
                <Popup>
                    Placeholder description
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map;