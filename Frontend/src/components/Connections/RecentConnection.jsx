import React, { useEffect, useState } from "react";
import "./RecentConnection.css";
import axios from "axios";

function RecentConnection() {
  const [recentCollaborate, setRecentCollaborate] = useState([]);

  const feed_id = 1;
  useEffect(() => {

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

        const data = response.data;
        console.log(data);
        setRecentCollaborate(data);
      } catch (error) {
        console.log(error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
  }, []);

  console.log("****RecentConnectionData**** ==>",recentCollaborate);

 

  return (
    <>
      <p className="connectionText">
        <hr /> RECENT CONNECTIONS <hr />
      </p>
      <div className="recentConnection">
        {recentCollaborate.slice(-4).map((collaborator) => (
          <div className="profile" key={collaborator.id}>
            <img
              src={`https://hackathon-g6.onrender.com/${collaborator.user.profile.image}`}
              alt="image"
            />
            <div className="about">
              <p className="name">{collaborator.name}</p>
              <p className="skill">{collaborator.skill}</p>
            </div>
            <p className="ProjectIdea">{collaborator.projectIdea}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default RecentConnection;
