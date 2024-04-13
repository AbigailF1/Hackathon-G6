import { useSyncExternalStore } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ButtonConnection from "./ButtonConnection";
import "./SentConnection.css";
import axios from "axios";

function SentConnection() {
  const [sentCollaborate, setSentCollaborate] = useState([]);
  const feed_id = 1;
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
              Authorization: ` Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log(data);
        // Set the fetched data to the state
        setSentCollaborate(data);
      } catch (error) {
        console.log(error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
  }, []);

  console.log("***SentCollaboration", sentCollaborate);

  return (
    <>
      <div className="sentConnection">
        <SideBar />
        <div className="Scontainer">
          <ButtonConnection />

          {sentCollaborate.map((collaborator) => (
            <div className="connection" key={collaborator.id}>
              <div className="profile">
                <img
                  src={`https://hackathon-g6.onrender.com/${collaborator.user.profile.image}`}
                  alt="profile"
                />
                <div className="about">
                  <p className="name">{collaborator.name}</p>
                  <p className="skill">{collaborator.skill}</p>
                  <p className="NumOfConnection">
                    {collaborator.connection} connections
                  </p>
                </div>
              </div>
              <p className="connectionMessage">{collaborator.message}</p>
              <div className="requestStatus">
                <p
                  className="requestStatus"
                  style={{
                    color:
                      collaborator.status === "Pending"
                        ? "grey"
                        : collaborator.status === "Accepted"
                        ? "green"
                        : collaborator.status === "Declined"
                        ? "red"
                        : "black",
                  }}
                >
                  {collaborator.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SentConnection;
