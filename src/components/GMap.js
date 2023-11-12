import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, TrafficLayer, Marker } from "@react-google-maps/api";


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

  const markers = [
    { id: 1, position: { lat: 40.63022376128623, lng: -73.95244505545564 } }, 
    { id: 2, position: { lat: 40.63035981700881, lng: -73.95247072899502 } }, 
    // Add more markers as needed
  ];

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
    
          {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
          />
        ))}

        </GoogleMap>

        

    </LoadScript>
  );
}

export default GMap;
