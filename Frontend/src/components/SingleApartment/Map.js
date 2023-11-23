"use client"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';  /* Mandatory import with react-leaflet */
import './Map.css'
import { Icon } from 'leaflet';

// Public key
const key = "pk.797c55abb968af7a1a9e8965b9e9d806"

function Map({ position }) {
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38,38]
        })

    return (
        <MapContainer center={position} zoom={15} className='map'>
            <TileLayer
                url={`https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.raster?key=${key}`}
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