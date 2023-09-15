import { useEffect } from 'react';
import { useMap} from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: false
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

export default LeafletgeoSearch