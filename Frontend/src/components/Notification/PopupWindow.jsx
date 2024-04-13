import React from "react";
import { Link } from "react-router-dom";

import { IoCloseSharp } from "react-icons/io5";
import "./popUp.css";
const PopupWindow = ({ isOpen, onClose, roomNumber }) => {
  return (
    <div className={`popup-window ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <IoCloseSharp style={{ color: "red" }} />
        </button>
        <p>Room Number: {roomNumber}</p>
        <p>
          Group Chat Link :
          <Link to="https://academate-group-chatt.onrender.com">Chat App</Link>
        </p>
      </div>
    </div>
  );
};

export default PopupWindow;
