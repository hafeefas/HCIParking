import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './reservedSpot.css';

function ReservedSpot(props) {
  const { spotNumber } = useParams();
  const navigate = useNavigate();

  const [timer, setTimer] = useState('10:00');
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation status
  const [timerActive, setTimerActive] = useState(false); // State to control timer activation

  useEffect(() => {
    let timerInterval;

    if (timerActive) {
      // Set the target time (10 minutes from now)
      const targetTime = new Date();
      targetTime.setMinutes(targetTime.getMinutes() + 10);

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
          clearInterval(timerInterval);
          setTimer('00:00');
        }
      };

      timerInterval = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(timerInterval);
  }, [timerActive]);

    const handleConfirm = () => {
      setIsConfirmed(true);
      setTimerActive(true); // Start the timer on confirmation
      props.reserveSpot(parseInt(spotNumber));
    };

    const handleCancel = () => {
      setIsConfirmed(false);
      setTimerActive(false);
      setTimer('10:00'); // Reset the timer
      props.cancelReservation(parseInt(spotNumber));
      navigate('/'); // Reset to the homepgae if cancelled
    };

  return (
    <div>
      <hr className="top-line" />
      <div className="header">
        <h1 className="title-prompt">Reserve Spot #{spotNumber}</h1>
        <img className="logo" src="checkmark.png" alt="Checkmark" />
      </div>
      {!isConfirmed && (
        <div className="button-container">
          <button onClick={handleConfirm} className="Confirm-btn">
            Confirm Spot
          </button>
          <button onClick={handleCancel} className="Back-btn">
            Cancel Reservation
          </button>
        </div>
      )}
       {isConfirmed && (
        <div>
          <p className="timeleft-prompt">
            You have 10 minutes to confirm your reserved parking space.
          </p>
          <p id="timer">{timer}</p>
          <button onClick={handleCancel} className="Back-btn">
            Cancel Reservation
          </button>
        </div>
      )}
      <hr className="bottom-line" />
    </div>
  );
}

export default ReservedSpot;
