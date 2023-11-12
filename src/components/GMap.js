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
    { id: 2, position: { lat: 40.630246224244345, lng: -73.95244960556349} }, 
    { id: 3, position: { lat: 40.63026403576449, lng: -73.95245094666801} },
    { id: 4, position: { lat: 40.63029202528872, lng: -73.95245496998139} },
    { id: 5, position: { lat: 40.63030678339564, lng: -73.95245832274267} },
    { id: 6, position: { lat: 40.63033982336302, lng: -73.9524690459439} },
    { id: 7, position: { lat: 40.630353647910376, lng: -73.95246970568154} },
    { id: 8, position: { lat: 40.6303857085916, lng: -73.95247775230858} },
    { id: 9, position: { lat: 40.630418787056136, lng: -73.95248244617436} },
    { id: 10, position: { lat: 40.630440669723654, lng: -73.95248646948788} },
    { id: 11, position: { lat: 40.630470185868475, lng: -73.95248646948788} },
    { id: 12, position: { lat: 40.630508887345634, lng: -73.9525009407118} },
    { id: 13, position: { lat: 40.630551645685046, lng: -73.95250961733825} },
    { id: 14, position: { lat: 40.63059097950872, lng: -73.95251354776998} },
    { id: 15, position: { lat: 40.63062202865047, lng: -73.95251813926653} },
    { id: 16, position: { lat: 40.63065533805562, lng: -73.95252762960638} },
    { id: 17, position: { lat: 40.63067477394293, lng: -73.95253040521499} },
    { id: 18, position: { lat: 40.63070428998427, lng: -73.95253778128978} },
    { id: 19, position: { lat: 40.63024110083941, lng: -73.9522989197675} },
    { id: 20, position: { lat: 40.630272448168476, lng: -73.9523069970399} },
    { id: 21, position: { lat: 40.63031874076162, lng: -73.95231537080633} },
    { id: 22, position: { lat: 40.630351810752906, lng: -73.9523209335321} },
    { id: 23, position: { lat: 40.630387695192965, lng: -73.95232835049983} },
    { id: 24, position: { lat: 40.63042756237697, lng: -73.95233551089879} },
    { id: 25, position: { lat: 40.630448936142514, lng:-73.95233819310765} },
    { id: 26, position: { lat: 40.63048405017106, lng: -73.95253778128978} },
    { id: 27, position: { lat: 40.63070428998427, lng: -73.95253778128978} },
    { id: 28, position: { lat: 40.63070428998427, lng: -73.95253778128978} },
    { id: 29, position: { lat: 40.63070428998427, lng: -73.95253778128978} },
    { id: 30, position: { lat: 40.63070428998427, lng: -73.95253778128978} },
    { id: 31, position: { lat: 40.630470185868475, lng: -73.95248646948788} },
    { id: 32, position: { lat: 40.630508887345634, lng: -73.9525009407118} },
    { id: 33, position: { lat: 40.630551645685046, lng: -73.95250961733825} },
    { id: 34, position: { lat: 40.63059097950872, lng: -73.95251354776998} },
    { id: 35, position: { lat: 40.63062202865047, lng: -73.95251813926653} },
    { id: 36, position: { lat: 40.63065533805562, lng: -73.95252762960638} },
    { id: 37, position: { lat: 40.63067477394293, lng: -73.95253040521499} },

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
            label={marker.id.toString()}
          />
        ))}

        </GoogleMap>

        

    </LoadScript>
  );
}

export default GMap;
