import React from "react";
import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 2,
      text: "how are you",
      name: "Leah Tsegaye",
    },
  ];

  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatBox;
