import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 bg-gray-300">
      <img
        className="h-5"
        src="https://static.thenounproject.com/png/961-200.png"
        alt="user"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
