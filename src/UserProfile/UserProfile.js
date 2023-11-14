import React, { useState } from "react";
import UserProfileIcon from './UserProfileIcon.png';
import './UserProfile.css';
import logo from './UserProfileIcon.png'

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    accessibilityNeeds: ''
  });

  

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <div className="image-container">
        <img src={logo} alt="UserProfileIcon" />
        <p>User Profile</p>
      </div>
    
      <div className="text-boxes">
        {isEditing ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Address: {userData.address}</p>
            <p>Accessibility Needs: {userData.accessibilityNeeds}</p>
          </div>
        ) : (
          <div>
            <div className="text-box-container">
              <p>Name:</p>
              <input 
                type="text" 
                className="boxes" 
                placeholder="Enter name" 
                name="name"
                value={userData.name}
                onChange={handleInputChange} 
              />
            </div>
            <div className="text-box-container">
              <p>Address:</p>
              <input 
                type="text" 
                className="boxes" 
                placeholder="Enter address" 
                name="address"
                value={userData.address}
                onChange={handleInputChange} 
              />
            </div>
            <div className="text-box-container">
              <p>Accessibility Needs:</p>
              <input 
                type="text" 
                className="boxes" 
                placeholder="Enter accessibility needs" 
                name="accessibilityNeeds"
                value={userData.accessibilityNeeds}
                onChange={handleInputChange} 
              />
            </div>
          </div>
        )}
      </div>

      <div className="button-container">
        <button className="back-button" onClick={() => window.location.href = '/HCIParking/'}>Back To Map</button>
        <button className={isEditing ? "edit-button" : "confirm-button"} onClick={toggleEditMode}>
          {isEditing ? "Edit" : "Confirm Changes"}
          </button>
      </div>
    </div>
  );
}

export default UserProfile;
