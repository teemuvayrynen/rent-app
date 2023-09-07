
"use client"
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import './map.css'
import { Icon } from 'leaflet';


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
    return (
        <div className='map-container'>
            <MapContainer center={kruununhakaCoordinates} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
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
            </MapContainer>
        </div>
        
    )
}

export default Map;