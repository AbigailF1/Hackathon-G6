import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonConnection.css";
import { useState } from "react";

function ButtonConnection({ setActive, Active }) {
  const [receivedButtonColor, setReceivedButtonColor] = useState("blue");
  const [sentButtonColor, setSentButtonColor] = useState("white");

  
  const handleReceivedButtonClick = () => {
    setReceivedButtonColor("blue");
    setSentButtonColor("white");
  };

  const handleSentButtonClick = (e) => {
    // e.preventDefault();
    setReceivedButtonColor("white");
    setSentButtonColor("blue");
  };

  return (
    <div className="conButton">
      <NavLink to="/Collaborate">
        <button
          id="active"
          style={{
            backgroundColor: receivedButtonColor,
            color: receivedButtonColor === "blue" ? "white" : "black",
          }}
          onClick={handleReceivedButtonClick}
        >
          RECEIVED
        </button>
      </NavLink>
      <NavLink to="/SentConnection">
        <button
          id="sent"
          style={{
            backgroundColor: sentButtonColor,
            color: sentButtonColor === "blue" ? "white" : "black",
          }}
          onClick={(e) => handleSentButtonClick(e)}
        >
          SENT
        </button>
      </NavLink>
    </div>
  );
}

export default ButtonConnection;
