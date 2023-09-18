import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

const DynamicMap = ({apartments}) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map apartments={apartments}/>
  )
}

export default DynamicMap