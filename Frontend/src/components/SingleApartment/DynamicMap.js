import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = ({ position }) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map position={position}/>
  )
}

export default DynamicMap