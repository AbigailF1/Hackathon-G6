import React, { useState } from "react";
import { useEffect } from "react";
import "./NewConnection.css";
import axios from "axios";


function NewConnection({ name, skill, message, connection }) {
  // const [collaborate, setCollaborate] = useState([]);

  // useEffect(() => {
  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // Make the HTTP request using Axios
  //       const token = localStorage.getItem("token"); // Retrieve token from local storage
  //       const response = await axios.get(
  //         "http://127.0.0.1:8000/api/feeds/2/collaborators/",
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
  //       setCollaborate(data);
  //     } catch (error) {
  //       console.log(error);
  //       console.error("There was a problem fetching the data:", error.message);
  //     }
  //   };

  //   // Call the async function to fetch data when the component mounts
  //   fetchData();
  // }, []);

  // console.log(collaborate);

  // const accepted = async (status) => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/feeds/2/collaborators/",
  //       status
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return response;
  // };
  // const declined = async (status) => {
  //   try {
  //     const response = await axios.post(
  //       "http://127.0.0.1:8000/api/feeds/2/collaborators/",
  //       status
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return response;
  // };

  const handleAccept = async (collaboratorId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/accept_request/", //  API endpoint
        {
          collaboratorId: collaboratorId,
          status: "accepted",
        },
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

  const handleDecline = async (collaboratorId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://127.0.0.1:8000/api/decline_request/", //  API endpoint
        {
          collaboratorId: collaboratorId,
          status: "declined",
        },
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

  const collaborate = [
    {
      id: 1,
      image:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "John Doe",
      skill: "Web Development",
      connection: 100,
      message: "Hi there! I'd like to connect with you.",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Jane Smith",
      skill: "Data Science",
      connection: 50,
      message: "Hello! Let's collaborate on a project together.",
    },
    {
      id: 3,
      image: "https://example.com/profile-image-3.jpg",
      name: "Alice Johnson",
      skill: "GraphicDesign",
      connection: 75,
      message: "Hi! I admire your work and would love to connect.",
    },
    {
      id: 4,
      image: "https://example.com/profile-image-4.jpg",
      name: "Bob Brown",
      skill: "Mobile App Development",
      connection: 80,
      message: "Hey! Looking forward to collaborating with you.",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      name: "Ella Davis",
      skill: "UI/UX Design",
      connection: 90,
      message: "Hello! Let's create something amazing together.",
    },
  ];

  return (
    <>
      <div className="connections">
        <p className="connectionText">
          <hr /> YOU HAVE <span> {collaborate.length} NEW REQUESTS</span> <hr />
        </p>
        {collaborate.map((collaborator) => (
          <div className="connectionRequest" key={collaborator.id}>
            <div className="profile">
              <img src={collaborator.image} alt="newconnectionImage" />
              <div className="about">
                <p className="name">{collaborator.name}</p>
                <p className="skill">{collaborator.skill}</p>
                <p className="NumOfConnection">
                  {collaborator.connection} connections
                </p>
              </div>
            </div>
            <p className="connectionMessage">{collaborator.message}</p>
            <div className="reqBtn">
              <button
                className="acceptBtn"
                onClick={() => handleAccept(collaborator.id)}
              >
                ACCEPT
              </button>
              <button
                className="declineBtn"
                onClick={() => handleDecline(collaborator.id)}
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
