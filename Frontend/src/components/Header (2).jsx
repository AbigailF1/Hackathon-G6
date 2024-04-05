import React, { useState } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const { Header} = Layout;
  const navigate = useNavigate();
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate(`/${buttonName}`);
  };
  const getButtonColor = (buttonName) => {
    return activeButton === buttonName ? "rgb(5, 190, 250);" : "black";
  };
  const icons=[  <RssFeedIcon sx={{color: getButtonColor('Feed')}} onClick={() => handleButtonClick('Feed')} />,
  <GroupsTwoToneIcon sx={{color: getButtonColor('Collaborate')}} onClick={() => handleButtonClick('Collaborate')}/>, 
   <ChatBubbleOutlineTwoToneIcon sx={{color: getButtonColor('Chat')}} onClick= {() => handleButtonClick('Chat')} />,
   <NotificationsNoneTwoToneIcon sx={{color: getButtonColor('Notifications')}} onClick={() => handleButtonClick('Notifications')} />,
   <label className="input input-bordered flex items-center mt-3 gap-2">
   <input type="text" className="grow" placeholder="Search" />
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#f5f5f5" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
 </label>
  
  ]
  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: icons[index],
  }));

  return (
    <Header className = 'text-white flex items-center justify-around' bodybg='#f5f5f5
    '>
    <img src="../src/assets/react.svg" className='items-center'/>
 <Menu
   className='flex w-screen gap-1 justify-around'
   mode="horizontal"
   items={items}
 />
 <div className="flex flex-col items-center ">
 <div className="avatar">
  <div className="w-16 rounded">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
</div>
</Header>
);
}
