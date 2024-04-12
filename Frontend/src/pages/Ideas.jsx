import { useEffect, useState } from "react";
// import IdeaBox from "./src/pages/Ideas";
// import NewPost from "../components/NewPost";

// import ProfileSide from '../components/ProfileSide';
import axios from "axios";
import NewPost from "../components/NewPost";
import IdeaBox from "./PostBox";
export default function Ideas() {
  const [ideaFeed, setIdeaFeed] = useState("");

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          "http://127.0.0.1:8000/api/feeds/idea/",
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
        setIdeaFeed(data);
        // Log the data to the console
        console.log(data);
      } catch (error) {
        console.log(error);
        // Log any errors to the console
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchData();
  }, []); // E
  console.log(ideaFeed);

  return (
    <div className="ml-12">
      <NewPost feedType="idea" />

      <IdeaBox data={ideaFeed} />
    </div>
  );
}
