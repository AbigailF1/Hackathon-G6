import React, { useEffect, useState } from "react";
import "./NotificationSideBar.css";
import axios from "axios";

function NotificationSideBar() {
  const [likes, setLikes] = useState(0);
  const [postFeed, setPostFeed] = useState(0);
  const [ideaFeed, setIdeaFeed] = useState(0);

  const user_id = 1;

  useEffect(() => {
    // Define an async function to fetch data
    const fetchLike = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${user_id}/likes/`,
          // user/<int:user_id>/likes/
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***like***", data);
        // Set the fetched data to the state
        setLikes(data.likes);
      } catch (error) {
        console.log("xxxxLIKE***",error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };
    const fetchPostFeed = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${user_id}/post-feeds-count/`,
          // 'user/<int:user_id>/post-feeds-count/'

          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***post feed***", data);
        // Set the fetched data to the state
        setPostFeed(data.post_feeds_count);
      } catch (error) {
        console.log(error);

        console.error("There was a problem fetching the data:", error.message);
      }
    };
    const fetchIdeaFeed = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `https://hackathon-g6.onrender.com/api/user/${user_id}/idea-feeds-count/`,
          // user/<int:user_id>/idea-feeds-count/</int:user_id>
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in the request headers
            },
          }
        );
        // Extract the data from the response
        const data = response.data;
        console.log("***idea feed***", data);
        // Set the fetched data to the state
        setIdeaFeed(data.idea_feeds_count);
      } catch (error) {
        console.log(error);

        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchLike();
    fetchIdeaFeed();
    fetchPostFeed();
  }, []);

  return (
    <div className="NotificationSideBar">
      <div className="dashboard">
        <h4>YOUR DASHBOARD</h4>
        <span className="stats">GO TO STATS</span>
      </div>
      <div>
        <div>
          <p>{likes}</p>
          <span>Likes</span>
        </div>
        <div>
          <p>{postFeed}</p>
          <span>Post Feed </span>
        </div>
        <div>
          <p>{ideaFeed}</p>
          <span>Idea Feed</span>
        </div>
      </div>
    </div>
  );
}

export default NotificationSideBar;
  