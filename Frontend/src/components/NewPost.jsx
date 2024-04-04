import React, { useState } from 'react';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function NewPost() {
  const [post, setPost] = useState('');

  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    setPost('');
  };

  return (
    <div className="flex flex-col px-8 py-7 bg-white rounded shadow-2xl max-w-[850px] max-md:px-5 mb-12 mt-20">
      <div className="text-xs uppercase text-neutral-900 max-md:max-w-full">
        new post
      </div>
      <div className="shrink-0 mt-4 h-px border border-solid bg-zinc-100 border-zinc-100 max-md:max-w-full" />
      <div className="flex-auto mt-3.5 text-lg text-neutral-900 text-opacity-20">
        <textarea
          className="w-full border rounded"
          rows="4"
          placeholder="New Post..."
          value={post}
          onChange={handleInputChange}
          style={{resize: 'none', backgroundColor: '#fbfcfc'}}
        />
      </div>
      <div className="flex flex-1 gap-5 justify-between items-center mt-4">
        <AttachFileOutlinedIcon sx={{color: "gray"}} />
        <ImageOutlinedIcon sx={{color: "gray"}} />
        <SlideshowOutlinedIcon sx={{color: "gray"}} />
        
        <SendOutlinedIcon sx={{color: "rgb(5, 190, 250)", cursor: "pointer"}} onClick={handleSubmit}/>
      </div>
    </div>
  );
}
