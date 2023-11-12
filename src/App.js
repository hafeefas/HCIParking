import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile.js';
import Navbar from "./components/Navbar";
import SpotsTable from "./spotstable/SpotsTable.js";
import MMap from "./mainMap/mMap";
import ReservedSpot from "./reservedSpots/reservedspots";

function App() {
  const [spots, setSpots] = useState(new Map(
    Array.from({ length: 37 }, (_, i) => [i + 1, "OPEN"])
  ));

  const reserveSpot = (spotNumber) => {
    setSpots(new Map(spots).set(spotNumber, "RESERVED"));
  };

  const cancelReservation = (spotNumber) => {
    setSpots(new Map(spots).set(spotNumber, "OPEN"));
  };

  return (
    <div>
      <Router>
        <Navbar spots={spots}/>
        <MMap />
        <Routes>
          <Route path="/" element={<SpotsTable spots={spots} />} />
          <Route path="/user-profiles" element={<UserProfile />} />
          <Route path="/reservedSpots/:spotNumber" element={<ReservedSpot spots={spots} reserveSpot={reserveSpot} cancelReservation={cancelReservation} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
