import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './reservedSpot.css';


function ReservedSpot() {
  // Set the target time (10 minutes from now)
  const targetTime = new Date();
  targetTime.setMinutes(targetTime.getMinutes() + 10); 

  // Set up state to hold the timer value and expiration status
  const [timer, setTimer] = useState('10:00');
  const [timerExpired, setTimerExpired] = useState(false);

  // Declare timerInterval variable in the component scope
  let timerInterval;

  // Function to update the countdown timer
  const updateTimer = () => {
    const currentTime = new Date();
    const timeDifference = new Date(targetTime - currentTime);

    // Get minutes and seconds
    const minutes = timeDifference.getUTCMinutes();
    const seconds = timeDifference.getUTCSeconds();

    // Display the time in the "timer" state
    setTimer(
      `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    );

    // When the timer reaches 0
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(timerInterval); // Stop the timer
      setTimer('00:00'); // Display 00:00 
      setTimerExpired(true); // Set timer expiration status to true
      window.alert("Your reservation time has expired."); 
    }
  };
  const handleConfirmSpot = () => {
    if (timerExpired) {
      window.alert("You cannot confirm this parking spot anymore as your reservation time has expired. Please go back to the main page to reserve a new spot.");
    } else {
      // Navigate to the confirmation page
     // window.location.href = '/confirmation-page'; // Replace with actual route
    }
  };

  // Call the updateTimer function every 1 second
  useEffect(() => {
    timerInterval = setInterval(updateTimer, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerInterval);
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  // Update the timer immediately when the component loads
  useEffect(() => {
    updateTimer();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  const { spotNumber } = useParams();
  return (
    <div>
      <hr className="top-line" />
      <div className="header">
        <h1 className="title-prompt">Thank You For Reserving Spot #{spotNumber}!</h1>
        <img className="logo" src="checkmark.png" alt="Checkmark" />
      </div>
      <p className="timeleft-prompt">
        You'll have 10 minutes to confirm your reserved parking space.
      </p>
      <p id="timer">{timer}</p>
      <a href="javascript:history.back()" className="Back-btn">
        Go Back
      </a>
      <button onClick={handleConfirmSpot} className="Confirm-btn">
        Confirm Spot
      </button>
      <hr className="bottom-line" />
    </div>
  );
}

export default ReservedSpot;
