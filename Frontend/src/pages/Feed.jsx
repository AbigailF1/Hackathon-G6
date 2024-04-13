import React, { useState } from "react";
import Ideas from "./Ideas";
import Posts from "./Posts";
import ProfileSide from "../components/FeedComp/ProfileSide";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import WysiwygOutlinedIcon from "@mui/icons-material/WysiwygOutlined";
import { Tabs } from "antd";
import ProfileHeader from "../components/Header/ProfileHeader";
import Chat from "../components/Chat";
import Footer from "../components/Footer/Footer";
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
  console.log(isChatVisible);
  return (
    <>
      <ProfileHeader />

      <div className="flex">
        <Tabs
          defaultActiveKey="1"
          centered
          items={items}
          onChange={onChange}
          className="shrink w-[1000px] ml-20"
        />
        ;
        <ProfileSide className="shrink w-[500px]" />
        <div className="fixed margin-top-30 right-0 mb-4 mr-0 w-full  ">
          {isChatVisible && <Chat />}
        </div>
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
