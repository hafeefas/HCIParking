import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./reservedSpot.css";
import logo from "./checkmark.png";
import MMap from "../mainMap/MMap";

function ReservedSpot(props) {
  const { spotNumber } = useParams();
  const navigate = useNavigate();

  const [timer, setTimer] = useState("10:00");
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track confirmation status
  const [timerActive, setTimerActive] = useState(false); // State to control timer activation


  const [spots] = useState(new Map(
    Array.from({ length: 36 }, (_, i) => [i + 1, "OPEN"])
  ));

  useEffect(() => {
    let timerId;

    if (timerActive) {
      const targetTime = new Date();
      targetTime.setMinutes(targetTime.getMinutes() + 10);

      const updateTimer = () => {
        const currentTime = new Date();
        const timeDifference = new Date(targetTime - currentTime);

        const minutes = timeDifference.getUTCMinutes();
        const seconds = timeDifference.getUTCSeconds();

        setTimer(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );

        if (minutes <= 0 && seconds <= 0) {
          setTimer("00:00");
          setIsConfirmed(false);
          props.cancelReservation(parseInt(spotNumber));
          navigate("/"); // Reset to the homepage if canceled
        } else {
          timerId = setTimeout(updateTimer, 1000);
        }
      };

      updateTimer();
    }

    return () => clearTimeout(timerId);
  }, [timerActive, spotNumber, props, navigate]);

  const handleConfirm = () => {
    setIsConfirmed(true);
    setTimerActive(true); // Start the timer on confirmation
    props.reserveSpot(parseInt(spotNumber));
  };

  const handleCancel = () => {
    setIsConfirmed(false);
    setTimerActive(false);
    setTimer("10:00"); // Reset the timer
    props.cancelReservation(parseInt(spotNumber));
    navigate("/"); // Reset to the homepage if canceled
  };

  return (
    <div>
      <hr className="top-line" />
      <div className="header">
        <h1 className="title-prompt">Reserve Spot #{spotNumber}</h1>
        <img className="logo" src={logo} alt="Checkmark" />
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
            You have 10 minutes remaining for your reserved parking space.
          </p>
          <p id="timer">{timer}</p>
          <div className="button-container">
            <button onClick={handleCancel} className="Back-btn">
              Cancel Reservation
            </button>
          </div>
        </div>
      )}
      <hr className="bottom-line" />

      <MMap spots={spots}/>

    </div>
  );
}

export default ReservedSpot;
