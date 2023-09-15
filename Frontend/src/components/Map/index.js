import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = () => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map />
  )
}

export default DynamicMap