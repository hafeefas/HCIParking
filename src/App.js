
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile.js'
import Navbar from "./components/Navbar"
import SpotsTable from "./spotstable/SpotsTable.js";
import GMap from "./components/GMap";
import mMap from "./mainMap/mMap";

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
        <mMap />
        <Routes>
          <Route path="/" element={<SpotsTable />} />
          <Route path="/user-profiles" element={<UserProfile />} />
        </Routes>
      </Router>

    </div>
  );
}



export default App;
