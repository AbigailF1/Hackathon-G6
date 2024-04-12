import React from "react";
import { useState } from "react";
import "./Notification.css";
import "./popUp.css";
import { IoCloseSharp } from "react-icons/io5";

// Popup window component
const PopupWindow = ({ isOpen, onClose }) => {
  return (
    <div className={`popup-window ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <IoCloseSharp style={{color:"red"}}/>
        </button>
        <p>Room Number: {10255}</p>
        <p>Group Chat Link : {`https://shorturl.at/fimw3`} </p>
      </div>
    </div>
  );
};

function Notification() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  // Function to toggle the popup window state
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="NotificationMessage">
      <div className="TimeStatus">
        <hr />
        <p>RECENT</p>
        <hr />
      </div>

      <div className="recentNotification">
        <div className="images">
          <img
            className="firstImg"
            src="https://shorturl.at/fimw3"
            alt="first"
          />
          <img
            className="secondImg"
            src="https://shorturl.at/fimw3"
            alt="second"
          />
          <img
            className="thirdImg"
            src="https://shorturl.at/fimw3"
            alt="third"
          />
        </div>
        <div className="NotificationText">
          <p>
            Lorem ipsum dolor sit, amet consectetur Laboriosam quod adipisci
            odio
          </p>
          <span>9 hours</span>
        </div>
        <span
          className="dot"
          onClick={togglePopup}
          style={{ cursor: "pointer" }}
        >
          ...
        </span>
      </div>
      <PopupWindow isOpen={isPopupOpen} onClose={togglePopup} />

      <div className="TimeStatus">
        <hr />
        <p>EARLIER</p>
        <hr />
      </div>
      <div className="earlierNotification">
        <div className="images">
          <img
            className="firstImg"
            src="https://shorturl.at/fimw3"
            alt="first"
          />
          <img
            className="secondImg"
            src="https://shorturl.at/fimw3"
            alt="second"
          />
          <img
            className="thirdImg"
            src="https://shorturl.at/fimw3"
            alt="third"
          />{" "}
        </div>
        <div className="NotificationText">
          <p>
            dolorem iure doloremque a omnis amet tenetur lo consequuntur modi ad
          </p>
          <span>9 hours</span>
        </div>
        <span className="dot">...</span>
      </div>
    </div>
  );
}

export default Notification;
