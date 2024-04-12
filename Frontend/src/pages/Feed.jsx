import React, { useState } from 'react'
import { Tabs, rem } from '@mantine/core';
import Ideas from './Ideas';
import Posts from './Posts';
import ProfileSide from '../components/FeedComp/ProfileSide';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';

import ProfileHeader from '../components/Header/ProfileHeader';
import Chat from '../components/Chat';
import Footer from '../components/Footer/Footer';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: (
      <div className="flex items-center ">
        <EmojiObjectsOutlinedIcon
          className="mr-5"
          sx={{ color: "rgb(5, 190, 250)" }}
        />
        Ideas
      </div>
    ),
    children: <Ideas />,
  },
  {
    key: "2",
    label: (
      <div className="flex items-center">
        <WysiwygOutlinedIcon
          className="mr-5"
          sx={{ color: "rgb(5, 190, 250)" }}
        />
        Posts
      </div>
    ),
    children: <Posts />,
  },
];

export default function Feed() {
  
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };
  return (
    <>
      <ProfileHeader />

      <div className="flex">
      <Tabs
      color="rgb(5, 190, 250)"
      className="shrink w-[1000px] ml-20 mr-10"
      defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection = { <EmojiObjectsOutlinedIcon
          className=""
          sx={{ color: "rgb(5, 190, 250)" }}
        />}>
          Ideas
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<WysiwygOutlinedIcon
          className=""
          sx={{ color: "rgb(5, 190, 250)" }}
        />} >
          Posts
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
      <div className='py-5'><Ideas /></div>
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        <div className='py-5'><Posts /></div>
      
      </Tabs.Panel>
    </Tabs>
        <ProfileSide className="shrink w-[500px]" />
      </div>
      <div className="fixed margin-top-30 right-0 mb-4 mr-0 w-full h-">
        {isChatVisible && <Chat />}
      </div>

      <div className="h-14 w-14   fixed right-0 top-[500px]  flex items-center justify-center ">
        <img
          className="h-full chat cursor-pointer  w-full z-[6] object-contain absolute left-[-23px] top-[3px] [transform:scale(2.632)]"
          loading="lazy"
          alt=""
          src="/chat@2x.png"
          onClick={toggleChatVisibility}
        />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
