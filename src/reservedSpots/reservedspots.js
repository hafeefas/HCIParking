import React, { useState, useEffect } from 'react';


import './reservedSpot.css';

function ReservedSpot() {
  return (
   
    <div>
      <hr className="top-line" />
      <div className="header">
        <h1 className="title-prompt">Thank You For Reserving!</h1>
        <img className="logo" src="checkmark.png" alt="Checkmark" />
      </div>
      <p className="timeleft-prompt">
        You'll have 10 minutes to confirm your reserved parking space.
      </p>
      <p id="timer">10:00</p>
      <a href="javascript:history.back()" className="Back-btn">
        Go Back
      </a>
      <a href="#" className="Confirm-btn">
        Confirm Spot
      </a>
      <hr className="bottom-line" />
    </div>
  );
  
 
}




function CountdownTimer() {
  const [targetTime, setTargetTime] = useState(new Date());
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the target time (10 minutes from now)
    setTargetTime((prevTargetTime) => {
      const newTargetTime = new Date(prevTargetTime);
      newTargetTime.setMinutes(newTargetTime.getMinutes() + minutes);
      return newTargetTime;
    });

    // Function to update the countdown timer
    function updateTimer() {
      const currentTime = new Date();
      const timeDifference = new Date(targetTime - currentTime);

      // Get minutes and seconds
      const newMinutes = timeDifference.getUTCMinutes();
      const newSeconds = timeDifference.getUTCSeconds();

      setMinutes(newMinutes);
      setSeconds(newSeconds);

      // When the timer reaches 0
      if (newMinutes <= 0 && newSeconds <= 0) {
        clearInterval(timerInterval); // Stop the timer
        setMinutes(0);
        setSeconds(0); // Display 00:00 or another message
      }
    }

    // Call the updateTimer function every 1 second
    const timerInterval = setInterval(updateTimer, 1000);

    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => {
      clearInterval(timerInterval);
    };
  }, [minutes, targetTime]);

  return (
    <div>
      <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
    </div>
  );
}





export default ReservedSpot;