import React, {useState} from 'react'
import MMap from './mainMap/MMap';

function Homepage() {

    const [spots, setSpots] = useState(new Map(
        Array.from({ length: 36 }, (_, i) => [i + 1, "OPEN"])
      ));
    
      const reserveSpot = (spotNumber) => {
        setSpots(new Map(spots).set(spotNumber, "RESERVED"));
      };
    
      const cancelReservation = (spotNumber) => {
        setSpots(new Map(spots).set(spotNumber, "OPEN"));
      };

  return (
    <div>
        <MMap spots={spots} />
    </div>
  )
}

export default Homepage