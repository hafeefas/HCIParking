
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar"
import SpotsTable from "./SpotsTable"


function App() {
  // Data Structures for Parking Spots
  const parkingSpots = new Map();

for (let i = 1; i <= 37; i++) {
  parkingSpots.set(i, "OPEN");
  console.log(i+" "+ parkingSpots.get(i));
}
  
  return (
    <div>
    {/*NavBar is rendered across all routes */}
    <Navbar />
    <SpotsTable />
    </div>
  );
}



export default App;
