import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

 const Map = () => {
    return (
       <GoogleMap
       defaultZoom={8}
       defaultCenter={{lat: 10.960078, lng: 78.076604}}
       />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;