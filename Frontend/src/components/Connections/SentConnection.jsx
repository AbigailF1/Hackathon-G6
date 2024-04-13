import { useSyncExternalStore } from "react";
import { useEffect } from "react";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ButtonConnection from "./ButtonConnection";
import "./SentConnection.css";

function SentConnection() {
  // const [sentCollaborate, setSentCollaborate] = useState([]);

  // useEffect(() => {
  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // Make the HTTP request using Axios
  //       const token = localStorage.getItem("token"); // Retrieve token from local storage
  //       const response = await axios.get(
  //         "https://hackathon-g6.onrender.comapi/feeds/2/collaborators/",
  //         {
  //           headers: {
  //             Authorization: ` Bearer ${token}`, // Include token in the request headers
  //           },
  //         }
  //       );
  //       // Extract the data from the response
  //       const data = response.data;
  //       console.log(data);
  //       // Set the fetched data to the state
  //       setSentCollaborate(data);
  //     } catch (error) {
  //       console.log(error);
  //       console.error("There was a problem fetching the data:", error.message);
  //     }
  //   };

  //   // Call the async function to fetch data when the component mounts
  //   fetchData();
  // }, []);

  // console.log(sentCollaborate);
  const sentCollaborate = [
    {
      id: 1,
      profileImg: "https://shorturl.at/gjptN",
      name: "John Doe",
      skill: "Web Development",
      connection: 100,
      message: "Hi there! Let's collaborate on a project.",
      status: "Pending",
    },
    {
      id: 2,
      profileImg: "https://example.com/profile-image-2.jpg",
      name: "Jane Smith",
      skill: "Data Science",
      connection: 50,
      message: "Hello! I'm interested in working with you.",
      status: "Accepted",
    },
    {
      id: 3,
      profileImg: "https://shorturl.at/vAHJV",
      name: "Alice Johnson",
      skill: "Graphic Design",
      connection: 75,
      message: "Hey! Let's create something amazing together.",
      status: "Declined",
    },
    {
      id: 4,
      profileImg: "https://shorturl.at/gjptN",
      name: "Bob Brown",
      skill: "Mobile App Development",
      connection: 80,
      message: "Hi! I'd like to connect with you.",
      status: "Pending",
    },
  ];

  return (
    <>
      <div className="sentConnection">
        <SideBar />
        <div className="Scontainer">
          <ButtonConnection />

          {sentCollaborate.map((collaborator) => (
            <div className="connection" key={collaborator.id}>
              <div className="profile">
                <img src={collaborator.profileImg} alt="profile" />
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
