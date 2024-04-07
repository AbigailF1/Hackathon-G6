import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from 'antd';
const SideBar = () => {
  
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  
  return (
    <div>
        <Space>
        <Radio.Group value={placement} onChange={onChange}>
          <Radio value="left">Chats </Radio>
        </Radio.Group>
        <Button type="primary" onClick={showDrawer}>
          Chats
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="">Chats</div>
            <li>
              <div className="chat chat-start pl-5 p-5">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">Leah Tsegaye</div>
                <div>Hello, how are you!</div>
              </div>
            </li>
            <li>
            <div className="chat chat-start pl-5 p-5">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">Yohanna </div>
                <div>Where are you</div>
              </div>
            </li>
            <li>
              <div className="chat chat-start pl-5 p-5 ">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">John</div>
                <div>How is class</div>
              </div>
            </li>
            <li>
              <div className="chat chat-start pl-5 p-5">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">Kevin</div>
                <div>Can we talk</div>
              </div>
            </li>
          </ul>
        <p>Some contents...</p>
        <div className=" fixed bottom-0 w-full py-10 shadow-lg pl-10">
          <button
          type="submit"
          className="w-auto bg-blue-500 text-white rounded-r-lg px-5 text-lg btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        >
          Start New Chat
        </button> 
        </div>
        <p>Some contents...</p>
      </Drawer>
    

    </div>
  );
};

export default SideBar;
