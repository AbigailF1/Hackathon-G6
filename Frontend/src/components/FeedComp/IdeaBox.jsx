<<<<<<< HEAD:Frontend/src/pages/IdeaBox.jsx
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Alert, Space, Modal } from "antd";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
// import SignupService from "../services/signup.service";
import { jwtDecode } from "jwt-decode"; 
import axios from 'axios';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

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
=======
import React, { useState } from 'react'
import { Alert, Space, Modal } from 'antd';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import CommentBox from './CommentBox';

export default function IdeaBox({person}) {
    const[liked, setLiked] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);

   function toggleFav(){
    setLiked( (prev) => !prev);
   }
   const [opens, setOpen] = useState(false);
   const [openReport, setOpenReport] = useState(false);
   const [report, setReport] = useState('');
   const showModal = () => {
     setOpen(true);
   };
   const show = () => {
    setOpenReport(true);
   }
   function handleReport(event) {
    event.preventDefault();
    console.log("You clicked the button");
    setReport(event.target.value)
    console.log("com", comment);
    setOpenReport(false);
   };
   function handleComment(event) {
>>>>>>> main:Frontend/src/components/FeedComp/IdeaBox.jsx
    event.preventDefault();
    console.log("You clicked the button");
    setComment(event.target.value);
    console.log("com", comment);
    setOpen(false);
<<<<<<< HEAD:Frontend/src/pages/IdeaBox.jsx
  }
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
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
          `http://127.0.0.1:8000/api/feeds/${decoded.user_id}/comments/`,
          
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
         setComment(data);
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
   console.log(comment);


  function change(event) {
    event.preventDefault();
    setComment(event.target.value);
  }
  function toggleComment() {
=======
   };
   const handleCancel = () => {
     console.log('Clicked cancel button');
     setOpen(false);
     setOpenReport(false);
   };
   const [comment,setComment] = useState('');
   const [apply,setApply] = useState(false);
   
   function change(event){
    event.preventDefault();
    setComment(event.target.value)
    setReport(event.target.value)
   }
   function toggleComment(){
>>>>>>> main:Frontend/src/components/FeedComp/IdeaBox.jsx
    setApply((prev) => !prev);
    sendRequest();
  }
  function sendRequest() {
    console.log("Request sent");
  }
  // eslint-disable-next-line react/prop-types
  // console.log(data[0].user.username);
  console.log(data);

  return (
<<<<<<< HEAD:Frontend/src/pages/IdeaBox.jsx
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-5 pt-2.5 bg-white rounded max-w-[850px]"
          >
            <div className="flex items-center gap-2">
              <div className="avatar mx-2 mb-2">
=======
    <div className="flex flex-col m-5 md:shrink-0 pt-2.5 bg-white rounded w-[280px] md:w-[450px] sm:w-[400px] lg:w-[850px] overflow-x-hidden">
        <div className='flex items-center gap-2'>
            <div className="avatar mx-2 mb-2">
>>>>>>> main:Frontend/src/components/FeedComp/IdeaBox.jsx
                <div className="w-12 rounded">
                  <img
                    src={`http://127.0.0.1:8000/${item.user.profile.image}`}
                    alt="Tailwind-CSS-Avatar-component"
                  />
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
                  position
                </div>
              </div>
            </div>
<<<<<<< HEAD:Frontend/src/pages/IdeaBox.jsx
            <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
            <div className="p-5" style={{ fontFamily: "Adamina" }}>
              {item.feed.feedText}
            </div>
            {item.user.image != null ? (
              <div className="border border-solid border-zinc-100">
                <img
                  src="../src/assets/img.jpg"
                  alt=""
                  className="h-auto max-w-lg rounded-lg w-full m-auto"
                />
              </div>
            ) : (
              " "
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

                <div>{comment[0].text_content
                      }</div>
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
        ))}
    </>
  );
=======
            
            <div className='flex flex-col gap-0'>
                <div className='text-black text-center font-semibold' style={{fontFamily :"Adamina"}}>
                    {person.name}
                </div>
                <div className='text-xs text-gray-500' style={{fontFamily :"Adamina"}}>
                    position
                </div>
            </div>
        </div>
        <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
        <div className="p-5" style={{fontFamily :"Adamina"}}>{person.content}</div>
        {person.image != null ? (
   <div className='border border-solid border-zinc-100'>
   <img src={person.image} alt="" className='h-[350px] rounded object-cover w-full m-auto' />
 </div>
) : (
  " "
)}
      <div className="mt-2.5 w-full border border-solid bg-zinc-100 border-zinc-100 min-h-[1px] max-md:max-w-full" />
      <div className='flex justify-between'>
        <div className=' flex gap-16 m-5'>
        {liked ? <FavoriteOutlinedIcon sx={{ color: 'red' }} onClick ={toggleFav} className='cursor-pointer'  /> : <FavoriteBorderOutlinedIcon onClick ={toggleFav} className='cursor-pointer'  />}
  
        <AddCommentOutlinedIcon onClick={ showModal} className='cursor-pointer' />
        <Modal
        title="Comment"
        style={{display: 'flex', alignItems: 'center' ,width: '100%'}}
        open={opens}
        onOk={handleComment}
        onCancel={handleCancel}
      >
 <textarea type='text' className="py-4 w-[250px] md:w-[500px] border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='comment...'
                value={comment}
                onChange ={change}/>      </Modal>
          <Drawer opened={opened} onClose={close} title="Comments">
      <CommentBox />
      </Drawer>
      <TextsmsOutlinedIcon  onClick={open} className='cursor-pointer'/>

    <PersonAddAlt1OutlinedIcon onClick={toggleComment}/>
    {apply ? (
        <Space direction="vertical" style={{ width: '100%' }} >
         <Alert
         message="Successful!"
         description={`You have requested to join ${person.name}'s team`}
         type="success"
         banner
         closable
       />
     </Space>
    ) :('')}
        </div>
        <FlagOutlinedIcon  onClick={show} className='m-5 cursor-pointer'/>  
      <Modal
        title="Report"
        style={{display: 'flex', alignItems: 'center' ,width: '100%'}}
        open={openReport}
        onOk={handleReport}
        onCancel={handleCancel}
      >
 <textarea type='text' className="py-4 w-[250px] md:w-[500px] border rounded resize-none bg-slate-100 p-2 " 
                rows="2"
                placeholder='Reasons for report...'
                value={report}
                onChange ={change}/>   
                   </Modal>
        </div>
    </div>
    
  )
>>>>>>> main:Frontend/src/components/FeedComp/IdeaBox.jsx
}
