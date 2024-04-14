import { useEffect, useState } from "react";
import NewPost from "../components/NewPost";
import PostBox from "./PostBox";
import axios from "axios";

export default function Posts() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "https://hackathon-g6.onrender.com/api/feeds/post/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        setPostData(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ml-12">
      <NewPost feedType="idea" />
      {postData && postData.map((post) => (
        <PostBox key={post.id} data={post} />
      ))}
    </div>
  );
}