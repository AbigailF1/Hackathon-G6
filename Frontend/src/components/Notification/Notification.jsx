import React from "react";
import "./Notification.css";

function Notification() {
  return (
    <div className="NotificationMessage">
      <div className="TimeStatus">
        <hr />
        <p>RECENT</p>
        <hr />
      </div>

      {notification.map((notification, index) => (
        <div className="recentNotification" key={notification.id}>
          <div className="images">
            <img className="firstImg" src={notification.image} alt="first" />
            <img className="secondImg" src={notification.image} alt="second" />
            <img className="thirdImg" src={notification.image} alt="third" />
          </div>
          <div className="NotificationText">
            <p>{notification.text}</p>
            <span>{notification.time} hours</span>
          </div>
          <span
            className="dot"
            onClick={() => togglePopup(index)}
            style={{ cursor: "pointer" }}
          >
            ...
          </span>
          <PopupWindow
            isOpen={popupOpen[index]} // Pass corresponding isOpen state
            onClose={() => togglePopup(index)}
            chatLink={notification.chatLink}
            roomNumber={notification.roomNumber}
            key={notification.roomNumber}
          />
        </div>
      ))}

      <div className="TimeStatus">
        <hr />
        <p>EARLIER</p>
        <hr />
      </div>

      {notification.slice(-3).map((notification, index) => (
        <div className="earlierNotification" key={notification.id}>
          <div className="images">
            <img className="firstImg" src={notification.image} alt="first" />
            <img className="secondImg" src={notification.image} alt="second" />
            <img className="thirdImg" src={notification.image} alt="third" />
          </div>
          <div className="NotificationText">
            <p>{notification.text}</p>
            <span>{notification.time} hours</span>
          </div>
          <span
            onClick={() => togglePopup(index + notification.length)} // Adjust index for earlier notifications
            className="dot"
            // onClick={togglePopup}
            style={{ cursor: "pointer" }}
          >
            ...
          </span>
          <PopupWindow
            isOpen={popupOpen[index + notification.length]} // Adjust index for earlier notifications
            onClose={() => togglePopup(index + notification.length)} // Adjust index for earlier notifications
            chatLink={notification.chatLink}
            roomNumber={notification.roomNumber}
          />
        </div>
      ))}
    </div>
  );
}

export default Notification;
