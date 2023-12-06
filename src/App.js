import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile.js';
import Navbar from "./components/Navbar";
import SpotsTable from "./spotstable/SpotsTable.js";
 import MMap from "./mainMap/mMap.js"; 
 //mmap has working css here but the confirmation/reservation appears on one page w/ the map

import ReservedSpot from "./reservedSpots/reservedspots";
import Homepage from "./Homepage.jsx";

function App() {
  const [spots, setSpots] = useState(new Map(
    Array.from({ length: 36 }, (_, i) => [i + 1, "OPEN"])
  ));

  const reserveSpot = (spotNumber) => {
    setSpots(new Map(spots).set(spotNumber, "RESERVED"));
    console.log("INSIDE RESERVE SPOT #: "+ spots + spotNumber);
    console.log(spots);
  };

  

  const cancelReservation = (spotNumber) => {
    setSpots(new Map(spots).set(spotNumber, "OPEN"));
  };

  return (
    <div>
      <Router basename="/HCIParking">
         <Navbar spots={spots} /> 
         {/* <MMap spots={spots} />  */}
        <Routes>
        <Route path="/" element = {<Homepage spots={spots}/>} />
          <Route path="/spots" element={<SpotsTable spots={spots} />} />
          {/* <Route path="/spots" element={<SpotsTable spots={spots}  /> */}
          <Route path="/user-profiles" element={<UserProfile />} />
          <Route path="/reservedSpots/:spotNumber" element={<ReservedSpot spots={spots} reserveSpot={reserveSpot} cancelReservation={cancelReservation} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
