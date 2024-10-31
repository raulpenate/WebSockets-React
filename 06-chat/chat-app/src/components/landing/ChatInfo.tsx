import React from "react";
import "../../css/landing/ChatInfo.css";
import type { IChatContent } from "../../interfaces/ChatContent.interface";

const ChatInfo: React.FC<IChatContent> = ({ title, text, imageSVG, style }) => {
  return (
    <div className="chat" style={style}>
      {React.createElement(imageSVG, { className: "chatImg" })}
      <div className="chatInfo">
        <h2 className="chatTittle">{title}</h2>
        <p className="chatText">{text}</p>
      </div>
    </div>
  );
};

export default ChatInfo;
