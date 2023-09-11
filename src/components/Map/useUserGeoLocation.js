import React, {useState, useEffect} from "react";

const useUserGeoLocation = () =>{
    const [location, setLocation] = useState({
        isLoaded: false,
        location: {
            lat: "",
            long: ""
        }
    })

    const onSuccess = location => {
        setLocation(prev => ({
            isLoaded: true,
            location: {
                lat: location.coords.latitude,
                long: location.coords.longitude
            }
        }))
    }

    const onError = error => {
        setLocation(prev => ({
            isLoaded: true,
            error: error
        }))
    }

    useEffect(()=>{
        if(!("geolocation" in navigator)) {
            onError("geolocation not available")
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    },[])

    return location
}

export default useUserGeoLocation;