
import React, { useEffect, useState } from "react";
import "./NewConnection.css";
import axios from "axios";

function NewConnection() {
  // const [collaborate, setCollaborate] = useState([]);

  // useEffect(() => {
  //   // Define an async function to fetch data
  //   const fetchData = async () => {
  //     try {
  //       // Make the HTTP request using Axios
  //       const token = localStorage.getItem("token"); // Retrieve token from local storage
  //       const response = await axios.get(
  //         "https://hackathon-g6.onrender.com/api/feeds/2/collaborators/",
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`, // Include token in the request headers
  //           },
  //         }
  //       );
  //       // Extract the data from the response
  //       const data = response.data;
  //       console.log(data);
  //       // Set the fetched data to the state
  //       setCollaborate(data);
  //       // Log the data to the console
  //       // console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //       // Log any errors to the console
  //       console.error("There was a problem fetching the data:", error.message);
  //     }
  //   };

  //   // Call the async function to fetch data when the component mounts
  //   fetchData();
  // }, []); 
  // console.log(collaborate);


  // const handleAccept = async (collaboratorId) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       "https://hackathon-g6.onrender.com/api/accept_request/", //  API endpoint
  //       {
  //         collaboratorId: collaboratorId,
  //         status: "accepted",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(
  //       "There was a problem accepting the request:",
  //       error.message
  //     );
  //   }
  // };

  // const handleDecline = async (collaboratorId) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       "https://hackathon-g6.onrender.com/api/decline_request/", //  API endpoint
  //       {
  //         collaboratorId: collaboratorId,
  //         status: "declined",
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(
  //       "There was a problem declining the request:",
  //       error.message
  //     );
  //   }
  // };

  const collaborate = [
    {
      id: 1,
      user: {
        profile: {
          image:
            "https://photogov-com.akamaized.net/examples/zz-240x288-pixel-photo/landmarks-US.webp",
          skills: [
            { title: "Web Development" },
            { title: "JavaScript" },
            { title: "React" },
          ],
        },
      },
      name: "John Doe",
      connection: 100,
      message: "Hi there! Let's collaborate on a project.",
    },
    {
      id: 2,
      user: {
        profile: {
          image: "https://visafoto.com/img/source355x388.jpg",
          skills: [
            { title: "Data Science" },
            { title: "Python" },
            { title: "Machine Learning" },
          ],
        },
      },
      name: "Jane Smith",
      connection: 50,
      message: "Hello! I'm interested in working with you.",
    },
    {
      id: 3,
      user: {
        profile: {
          image:
            "https://photogov-com.akamaized.net/examples/zz-240x288-pixel-photo/landmarks-US.webp",
          skills: [
            { title: "Graphic Design" },
            { title: "Adobe Illustrator" },
            { title: "Photoshop" },
          ],
        },
      },
      name: "Alice Johnson",
      connection: 75,
      message: "Hey! Let's create something amazing together.",
    },
    {
      id: 4,
      user: {
        profile: {
          image: "https://visafoto.com/img/source355x388.jpg",
          skills: [
            { title: "Mobile App Development" },
            { title: "iOS" },
            { title: "Android" },
          ],
        },
      },
      name: "Bob Brown",
      connection: 80,
      message: "Hi! I'd like to connect with you.",
    },
    {
      id: 5,
      user: {
        profile: {
          image:
            "https://photogov-com.akamaized.net/examples/zz-240x288-pixel-photo/landmarks-US.webp",
          skills: [
            { title: "UI/UX Design" },
            { title: "Figma" },
            { title: "Sketch" },
          ],
        },
      },
      name: "Emily Wilson",
      connection: 60,
      message: "Hello! Let's discuss potential collaboration opportunities.",
    },
    {
      id: 6,
      user: {
        profile: {
          image: "https://visafoto.com/img/source355x388.jpg",
          skills: [
            { title: "Backend Development" },
            { title: "Node.js" },
            { title: "Express" },
          ],
        },
      },
      name: "Michael Johnson",
      connection: 90,
      message: "Hi! I'm looking for backend developers to join my project.",
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
              <img
                // src={`https://hackathon-g6.onrender.com/${collaborator.user.profile.image}`}
                src={`${collaborator.user.profile.image}`}
                alt="newConnectionImage"
              />
              <div className="about">
                <p className="name">{collaborator.name}</p>
                <p className="skill">
              
                  {collaborator.user.profile.skills.map((skill, index) => (
                    <React.Fragment key={index}>
                      <span>{skill.title}</span>
                      {/* Render '|' if it's not the last skill */}
                      {index !== collaborator.user.profile.skills.length - 1 && " | "}
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
