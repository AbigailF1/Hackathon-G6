import React, { useState } from 'react';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
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
    <div className="flex flex-col px-8 bg-white rounded shadow-2xl max-w-[850px] max-md:px-5 mb-12 ml-5 ">
      <div className="text-xs uppercase  font-serif font-bold text-neutral-900 max-md:max-w-full mt-5">
        new post
      </div>
      <div className="flex-auto mt-3.5 text-lg text-neutral-900 text-opacity-20 ">
        <textarea
          className="w-full border rounded resize-none bg-slate-100 p-2 text-black font-serif text-sm"
          rows="2"
          placeholder="Write freely..."
          value={post}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="flex flex-1 gap-5 justify-between items-center pb-2 mb-2">
        <AttachFileOutlinedIcon sx={{color: "gray"}} />
        <ImageOutlinedIcon sx={{color: "gray"}} />        
        <SendOutlinedIcon sx={{color: "rgb(5, 190, 250)", cursor: "pointer"}} onClick={handleSubmit}/>
      </div>
    </div>
  );
}
