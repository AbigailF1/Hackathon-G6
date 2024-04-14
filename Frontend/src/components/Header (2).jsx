import React, { useState } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import ChatBubbleOutlineTwoToneIcon from "@mui/icons-material/ChatBubbleOutlineTwoTone";
import { Layout, Menu, Input } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [activeButton, setActiveButton] = useState(null);
  const { Header} = Layout;
  const navigate = useNavigate();
  const {Search} = Input;

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    navigate(`/${buttonName}`);
  };

  function handleProfile(){
     navigate('/Profile')
  }

  const getButtonColor = (buttonName) => {
    return activeButton === buttonName ? "rgb(5, 190, 250);" : "black";
  };

  const icons=[  <RssFeedIcon sx={{color: getButtonColor('Feed')}} onClick={() => handleButtonClick('Feed')} />,
  <GroupsTwoToneIcon sx={{color: getButtonColor('Collaborate')}} onClick={() => handleButtonClick('Collaborate')}/>, 
   <ChatBubbleOutlineTwoToneIcon sx={{color: getButtonColor('Chat')}} onClick= {() => handleButtonClick('Chat')} />,
   <NotificationsNoneTwoToneIcon sx={{color: getButtonColor('Notifications')}} onClick={() => handleButtonClick('Notifications')} />,
   <Search placeholder="Search.." allowClear  style={{ width: 200, marginTop: 16 }} />
  ]

  const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: icons[index],
  }));

  return (
  <Header className = 'text-white flex items-center justify-between w-full' bodybg='#f5f5f5'>
      <img src="../src/assets/acadamate.png" className='items-center max-w-full w-16 pr-4 left-0 '/>
      <Menu
        className='flex w-screen gap-7 justify-between'
        mode="horizontal"
        items={items}
      />
      <div className="flex flex-col items-center pl-10">
          <div className="avatar cursor-pointer" onClick={handleProfile}>
            <div className="w-16 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
      </div>
      
   
  </Header>
);
}
