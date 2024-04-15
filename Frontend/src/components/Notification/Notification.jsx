import React from "react";
import { useState } from "react";
import "./Notification.css";
import PopupWindow from "./PopupWindow";
import axios from "axios";
import { useEffect } from "react";

function Notification() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notification, setNotification] = useState([]);

  const user_id = 1;
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/users/${user_id}/notifications/`, //  API endpoint

          //  /users/<int:user_id>/notifications/

          {
            headers: {
              Authorization: ` Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the fetched data to the state
        setNotification(data);
      } catch (error) {
        console.log(error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    //
  }, []);

  console.log(notification);

  const [popupOpen, setPopupOpen] = useState(
    Array(notification.length).fill(false)
  );

  const togglePopup = (index) => {
    setPopupOpen((prevPopupOpen) => {
      const newPopupOpen = [...prevPopupOpen];
      newPopupOpen[index] = !newPopupOpen[index];
      return newPopupOpen;
    });
  };
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