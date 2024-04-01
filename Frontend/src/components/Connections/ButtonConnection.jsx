import React from 'react'
import './ButtonConnection.css'

function ButtonConnection() {
  return (
    <div className="conButton">
      <a href="#received" id="active">
        RECEIVED
      </a>
      <a href="#sent" id='sent'>SENT</a>
    </div>
  );
}

export default ButtonConnection
