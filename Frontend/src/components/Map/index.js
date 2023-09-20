import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = ({apartments, markers, setFilteredMarkers}) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map apartments={apartments} markers={markers} setFilteredMarkers={setFilteredMarkers}/>
  )
}

export default DynamicMap