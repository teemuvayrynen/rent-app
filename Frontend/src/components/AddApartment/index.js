import dynamic from 'next/dynamic';
import { useMemo } from 'react';


const DynamicMap = ({circle, setCircle}) => {
  const Map = useMemo(() => dynamic(() => import('./Map'), {
    ssr: false
  }), [])

  return (
    <Map circle={circle} setCircle={setCircle}/>
  )
}

export default DynamicMap