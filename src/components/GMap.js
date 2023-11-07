import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function GMap() {
  const [map, setMap] = useState(null);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 40.630494495970645, 
    lng: -73.95242628063484,
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
        onLoad={onLoad}
      />
    </LoadScript>
  );
}

export default GMap;
