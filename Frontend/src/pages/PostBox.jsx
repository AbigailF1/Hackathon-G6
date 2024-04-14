/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Alert, Space, Modal } from "antd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
// import SignupService from "../services/signup.service";
import CommentBox from "../components/FeedComp/CommentBox";
import { jwtDecode } from "jwt-decode";
import { Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import axios from "axios";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

export default function IdeaBox({ key, data }) {
  const [liked, setLiked] = useState(false);
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const [opened, { open, close }] = useDisclosure(false);

  console.log(decoded.user_id);
  
  const [opens, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleComment = () => {
    if (comment.trim() !== "") {
      sendCommentRequest();
      setOpen(false);
    }
  };
  
  const handleCancel = () => {
    setOpen(false);
  };
  
  function sendCommentRequest() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      text_content: comment,
      feed: data.feed.id, 
      user: decoded.user_id,
    };
  
    axios
      .post(`https://hackathon-g6.onrender.com/api/feeds/${body.feed}/comments/add/`, body, config)
      .then((response) => {
        console.log("Comment added successfully", response.data);
      })
      .catch((error) => {
        console.error("Error adding comment", error);
      });
  }
  
  const [comment, setComment] = useState("");
  const [apply, setApply] = useState(false);

  // http://127.0.0.1:8000/api/feeds/16/comments/

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Make the HTTP request using Axios
        const token = localStorage.getItem("token"); // Retrieve token from local storage
        const response = await axios.get(
          `/api/feeds/${decoded.user_id}/comments/`,

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
        // setComment(data);
        // Log the data to the console
        console.log(data);
      } catch (error) {
        console.log(error);
        // Log any errors to the console
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    fetchData();
  }, []); // E
  console.log(comment);
 const uniqueKey = `likedState_${data.feed.id}`;

 // Load liked state from local storage on component mount
 useEffect(() => {
   const likedState = localStorage.getItem(uniqueKey);
   if (likedState) {
     setLiked(JSON.parse(likedState));
   }
 }, [uniqueKey]);

 // Save liked state to local storage whenever it changes
 useEffect(() => {
   localStorage.setItem(uniqueKey, JSON.stringify(liked));
 }, [liked, uniqueKey]);
  function change(event) {
    event.preventDefault();
    setComment(event.target.value);
  }
  function toggleComment() {
    setApply((prev) => !prev);
    sendRequest();
  }
  function toggleFav() {
    setLiked((prev) => !prev);
    sendLikeRequest();
  }
  
  function sendLikeRequest() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      user: data.user.id,
      feed: data.feed.id, // Assuming data is an array and you want to send the first feed's ID
    };
    console.log(JSON.stringify(body));
  
    if (liked) {
      // Unlike the feed
      axios
        .delete(`https://hackathon-g6.onrender.com/api/users/${body.user}/feeds/${body.feed}/toggle-like/`, config)
        .then((response) => {
          console.log("Unlike successful", response.data);
        })
        .catch((error) => {
          console.error("Unlike error", error);
        });
    } else {
      // Like the feed
      axios
        .post(`https://hackathon-g6.onrender.com/api/users/${body.user}/feeds/${body.feed}/toggle-like/`, body, config)
        .then((response) => {
          console.log("Like successful", response.data);
          console.log("Like success", body)
        })
        .catch((error) => {
          console.error("Like error", error);
        });
    }
  }
  function sendRequest() {
    console.log("Request sent");
  }
  // eslint-disable-next-line react/prop-types
  // console.log(data[0].user.username);
  console.log(data);

  return (
    <div className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]">
      <div className="flex items-center gap-2">
        <div className="avatar mx-2 mb-2">
          <div className="w-12 rounded">
            {data.user.profile && data.user.profile.image ? (
              <img
                src={`https://hackathon-g6.onrender.com/${data.user.profile.image}`}
                alt="User Avatar"
              />
            ) : (
              <img
                src="../src/assets/default-profile.jpg"
                alt="Default Avatar"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col gap-0">
          <div
            className="text-black text-center font-semibold"
            style={{ fontFamily: "Adamina" }}
          >
            {data.user.username}
          </div>
          <div
            className="text-xs text-gray-500"
            style={{ fontFamily: "Adamina" }}
          >
            {data.user.profile && data.user.profile.skills.length > 0 ? (
              <>
                {data.user.profile.skills.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span>{skill.title}</span>
                    {index !== data.user.profile.skills.length - 1 && " | "}
                  </React.Fragment>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className="p-5" style={{ fontFamily: "Adamina" }}>
        {data.feed.feedText}
      </div>
      {data.feed.image != null ? (
        <div className="border border-solid border-zinc-100">
          <img
            src={`http://127.0.0.1:8000/${data.feed.image}`}
            alt=""
            className="h-auto max-w-lg rounded-lg w-full m-auto"
          />
        </div>
      ) : (
        ""
      )}
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className=" flex gap-16 m-5">
        {liked ? (
          <FavoriteOutlinedIcon
            sx={{ color: "red" }}
            onClick={toggleFav}
          />
        ) : (
          <FavoriteBorderOutlinedIcon onClick={toggleFav} />
        )}

        <AddCommentOutlinedIcon onClick={showModal} />
        <Modal
          title="Comment"
          style={{ display: "flex", alignItems: "center", width: "100%" }}
          open={opens}
          onOk={handleComment}
          onCancel={handleCancel}
        >
          <textarea
            type="text"
            className="py-4 w-full border rounded resize-none bg-slate-100 p-2 "
            rows="2"
            style={{ width: "600px" }}
            placeholder="comment..."
            value={comment}
            onChange={change}
          />
        </Modal>
        <Drawer opened={opened} onClose={close} title="Comments">
          <CommentBox />
        </Drawer>
        <TextsmsOutlinedIcon onClick={open} className="cursor-pointer" />
        <PersonAddAlt1OutlinedIcon onClick={toggleComment} />
        {apply ? (
          <Space direction="vertical" style={{ width: "100%" }}>
            <Alert
              message="Successful!"
              description={`You have requested to join ${data.user.username}'s team`}
              type="success"
              banner
              closable
            />
          </Space>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}