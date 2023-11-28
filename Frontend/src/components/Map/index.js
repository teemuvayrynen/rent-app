import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = ({apartments, markers, setHoveredMarkerID, handleUpdate, hoveredMarkerID}) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map 
      apartments={apartments}
      markers={markers} 
      setHoveredMarkerID={setHoveredMarkerID}
      handleUpdate={handleUpdate}
      hoveredMarkerID={hoveredMarkerID}
    />
  )
}

export default DynamicMap