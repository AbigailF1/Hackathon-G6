/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Alert, Space, Modal } from "antd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";

export default function IdeaBox({ data }) {
  const [liked, setLiked] = useState(false);
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);

  console.log(decoded.user_id);
  function toggleFav() {
    setLiked((prev) => !prev);
  }
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  function handleComment(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setComment(event.target.value);
    console.log("com", comment);
    setOpen(false);
  }
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const [comment, setComment] = useState("");
  const [apply, setApply] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://hackathon-g6.onrender.com//api/feeds/${decoded.user_id}/comments/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        console.log(data);
        setComment(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        console.error("There was a problem fetching the data:", error.message);
      }
    };

    fetchData();
  }, []);

  console.log(comment);

  function change(event) {
    event.preventDefault();
    setComment(event.target.value);
  }
  function toggleComment() {
    setApply((prev) => !prev);
    sendRequest();
  }
  function sendRequest() {
    console.log("Request sent");
  }

  console.log(data);

  return (
    <>
      {data && Array.isArray(data) ? (
        data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]"
          >
            <div className="flex items-center gap-2">
              <div className="avatar mx-2 mb-2">
                <div className="w-12 rounded">
                  {item.user.profile && item.user.profile.image && (
                    <img
                      src={`https://hackathon-g6.onrender.com/${item.user.profile.image}`}
                      alt="Tailwind-CSS-Avatar-component"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-0">
                <div
                  className="text-black text-center font-semibold"
                  style={{ fontFamily: "Adamina" }}
                >
                  {item.user.username}
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "Adamina" }}
                >
                  {item.user.profile &&
                    item.user.profile.skills &&
                    item.user.profile.skills.map((skill, index) => (
                      <React.Fragment key={index}>
                        <span>{skill.title}</span>
                        {index !== item.user.profile.skills.length - 1 && " | "}
                      </React.Fragment>
                    ))}
                </div>
              </div>
            </div>
            <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
            <div className="p-5" style={{ fontFamily: "Adamina" }}>
              {item.feed && item.feed.feedText}
            </div>
            {item.feed && item.feed.image != null ? (
              <div className="border border-solid border-zinc-100">
                <img
                  src={item.feed.image}
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
                open={open}
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

                <div>{comment[0]?.text_content}</div>
              </Modal>
              <TextsmsOutlinedIcon />
              <PersonAddAlt1OutlinedIcon onClick={toggleComment} />
              {apply ? (
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Alert
                    message="Successful!"
                    description={`You have requested to join ${item.user.username}'s team`}
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
        ))
      ) : (
        <div>No data available</div>
      )}
    </>
  );
}
