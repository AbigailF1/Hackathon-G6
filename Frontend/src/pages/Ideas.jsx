import { useEffect, useState } from "react";
import axios from "axios";
import NewPost from "../components/NewPost";
import IdeaBox from "./PostBox";
import Footer from '../components/Footer/Footer';
import ProfileHeader from "../components/Header/ProfileHeader";


export default function Ideas() {
  const [ideaFeed, setIdeaFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://hackathon-g6.onrender.com/api/feeds/idea/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        setIdeaFeed(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {/* <ProfileHeader/> */}
    <div className="ml-12">
      <NewPost feedType="idea" />

      {ideaFeed.map((idea) => (
        <IdeaBox key={idea.id} data={idea} />
      ))}
    </div>
    {/* <Footer/> */}
    </>
  );
}