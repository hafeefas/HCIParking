import React from "react";
import './UserProfile.css'

function UserProfile() {
  return (
    <div>
      <div className="image-container">
        <img src="UserProfileIcon.png" alt="UserProfileIcon" />
        <p>User Profile</p>
      </div>

      <div className="text-boxes">
        <div className="text-box-container">
          <p>Name:</p>
          <input type="text" className="boxes" placeholder="Enter name" />
        </div>

        <div className="text-box-container">
          <p>Address:</p>
          <input type="text" className="boxes" placeholder="Enter address" />
        </div>

        <div className="text-box-container">
          <p>Accessibility Needs:</p>
          <input type="text" className="boxes" placeholder="Enter accessibility needs" />
        </div>
      </div>

      <div className="button-container">
        <button className="back-button">Back</button>
        <button className="confirm-button">Confirm Changes</button>
      </div>
    </div>
  );
}

export default UserProfile;
