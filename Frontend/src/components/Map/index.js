import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = ({apartments, markers, loadingApartments, handleUpdate}) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map 
      apartments={apartments}
      markers={markers} 
      loadingApartments={loadingApartments}
      handleUpdate={handleUpdate}
    />
  )
}

export default DynamicMap