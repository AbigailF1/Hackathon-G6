
import React, { useEffect, useState } from "react";
import "./NewConnection.css";
import axios from "axios";

function NewConnection() {
  const [collaborate, setCollaborate] = useState([]);

const feed_id=1;

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/feeds/${feed_id}/collaborators/`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the fetched data to the state
        setCollaborate(data);
      } catch (error) {
        console.log(error);
        
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
  }, []); 
  console.log("****NEWConnectionData**** ==>",collaborate);


  const handleAccept = async (collaborator_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://hackathon-g6.onrender.com/api/feeds/${feed_id}/collaborators/${collaborator_id}/accept`, //  API endpoint
        //  /feeds/<int:feed_id>/collaborators/<int:collaborator_id>/accept/

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        "There was a problem accepting the request:",
        error.message
      );
    }
  };

  const handleDecline = async ( collaborator_id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://hackathon-g6.onrender.com/api/feeds/${feed_id}/collaborators/${collaborator_id}/decline`, //  API endpoint
        // /feeds/<int:feed_id>/collaborators/<int:collaborator_id>/decline/
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        "There was a problem declining the request:",
        error.message
      );
    }
  };


  return (
    <>
      <div className="connections">
        <p className="connectionText">
          <hr /> YOU HAVE <span> {collaborate.length} NEW REQUESTS</span> <hr />
        </p>
        {collaborate.map((collaborator) => (
          <div className="connectionRequest" key={collaborator.id}>
            <div className="profile">
              <img
                src={`https://hackathon-g6.onrender.com/${collaborator.user.profile.image}`}
                alt="newConnectionImage"
              />
              <div className="about">
                <p className="name">{collaborator.name}</p>
                <p className="skill">
                  {collaborator.user.profile.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                      <span>{skill.title}</span>
                      {/* Render '|' if it's not the last skill */}
                      {index !== collaborator.user.profile.skills.length - 1 &&
                        " | "}
                    </React.Fragment>
                  ))}
                </p>
                <p className="NumOfConnection">
                  {collaborator.connection} connections
                </p>
              </div>
            </div>
            <p className="connectionMessage">{collaborator.message}</p>
            <div className="reqBtn">
              <button
                className="acceptBtn"
                onClick={() => handleAccept(collaborator.collaborator_id)}
              >
                ACCEPT
              </button>
              <button
                className="declineBtn"
                onClick={() => handleDecline(collaborator.collaborator_id)}
              >
                DECLINE
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

 export default NewConnection;
