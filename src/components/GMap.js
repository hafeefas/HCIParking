import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, TrafficLayer } from "@react-google-maps/api";

function GMap() {
  const [map, setMap] = useState(null);

  const mapContainerStyle = {
    width: "100%",
    height: "700px",
  };

  const center = {
    lat: 40.6305372434552, 
    lng: -73.95243164504681,
  };

  const onLoad = (map) => {
    setMap(map);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCeQdNw54qmr-iV6mdprs9fO7TGGBJ0_uM"
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={28}
        mapTypeId= "satellite"
        onLoad={onLoad}
        gestureHandling= "none"
        zoomControl= "false"
        >
          <TrafficLayer />
        </GoogleMap>

        

    </LoadScript>
  );
}

export default GMap;
