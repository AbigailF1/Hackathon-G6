import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ButtonConnection.css";

function ButtonConnection() {
  const [receivedButtonColor, setReceivedButtonColor] = useState("blue");
  const [sentButtonColor, setSentButtonColor] = useState("white");

  const handleReceivedButtonClick = () => {
    setReceivedButtonColor("blue");
    setSentButtonColor("white");
    setActiveButton("received");
  };

  const handleSentButtonClick = (e) => {
    setReceivedButtonColor("white");
    setSentButtonColor("blue");
    setActiveButton("sent");
  };

  return (
    <div className="conButton">
      <NavLink to="/Collaborate">
        <button
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
