import React from "react";
import { NavLink } from "react-router-dom";
import "./ButtonConnection.css";

function ButtonConnection({ setActive, Active }) {
  return (
    <div className="conButton">
      <NavLink to="/Collaborate">
        <button id="active">RECEIVED</button>
      </NavLink>
      <NavLink to="/SentConnection">
        <button id="sent">SENT</button>
      </NavLink>
    </div>
  );
}

export default ButtonConnection;
