import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import "./popUp.css";
const PopupWindow = ({ isOpen, onClose,roomNumber,chatLink }) => {
  return (
    <div className={`popup-window ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          <IoCloseSharp style={{ color: "red" }} />
        </button>
        <p>Room Number: {roomNumber}</p>
        <p>Group Chat Link :`${chatLink} ` </p>
      </div>
    </div>
  );
};

export default PopupWindow;
