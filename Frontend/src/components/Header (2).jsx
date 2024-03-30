import React, { useState } from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
export default function Header() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getButtonColor = (buttonName) => {
    return activeButton === buttonName ? "rgb(5, 190, 250);" : "black";
  };

  return (
    <div className="absolute top-0 left-0 right-0 h-20 px-4 flex gap-20 items-center bg-white shadow-md">
      <img
        className="w-16 h-16 rounded-full"
        src="../logo.png"
        alt="Logo"
      />
      <div className='mt-3'><RssFeedIcon sx={{color: getButtonColor('rss')}} onClick={() => handleButtonClick('rss')} />
      <h6 className='text-black font-serif mt-2'>IDEA FEED</h6>
      </div>
      <div className='mt-3'>
      <GroupsTwoToneIcon sx={{color: getButtonColor('groups')}} onClick={() => handleButtonClick('groups')} />
      <h6 className='text-black font-serif mt-2'>COLLABS</h6>
      </div>
      <div className='mt-3'>
      <ChatBubbleOutlineTwoToneIcon sx={{color: getButtonColor('chat')}} onClick= {() => handleButtonClick('chat')} />
      <h6 className='text-black font-serif mt-2'>CHAT</h6>
      </div>
      <div className='mt-3'>
      <NotificationsNoneTwoToneIcon sx={{color: getButtonColor('notifications')}} onClick={() => handleButtonClick('notifications')} />
      <h6 className='text-black font-serif mt-2'>NOTIFICATIONS</h6>
      </div>
      <div className='relative'>
      <SearchTwoToneIcon className='absolute top-1/2 left-2 transform -translate-y-1/2' style={{color: "rgb(5, 190, 250)"}}/>
      <input type='text' placeholder='Search...' className='pl-10 bg-white  border-black text-black'/>
    </div>
     

    </div>
  );
}
