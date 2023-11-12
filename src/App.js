
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile.js'
import Navbar from "./components/Navbar"
import SpotsTable from "./spotstable/SpotsTable.js";
import MMap from "./mainMap/mMap";
import ReservedSpot from "./reservedSpots/reservedspots";

function App() {
  // Data Structures for Parking Spots
  const parkingSpots = new Map();

  for (let i = 1; i <= 37; i++) {
    parkingSpots.set(i, "OPEN");
    console.log(i + " " + parkingSpots.get(i));
  }

  return (
    <div>
      <Router>

        {/*NavBar is rendered across all routes */}
        <Navbar />
        <MMap />
        <Routes>
          <Route path="/" element={<SpotsTable />} />
          <Route path="/user-profiles" element={<UserProfile />} />

          <Route path="/reservedSpots/:spotNumber" element={<ReservedSpot />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
