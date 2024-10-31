import type React from "react";
import { Layout } from "antd";
import LadingMenu from "../components/Menu/LandingMenu";
import HeroSection from "../components/landing/HeroSection";
import "../css/pages/LadingPage.css";
import Chat from "../components/landing/ChatInfo";
import girl from "../assets/girl.svg?react";
import boy from "../assets/boy.svg?react";
import pm from "../assets/pm.svg?react";
import { Color } from "../enums/Color";
import type { IChatContent } from "../interfaces/ChatContent.interface";

const { Content, Footer } = Layout;

const chatContent: IChatContent[] = [
  {
    title: "Real-Time Messaging",
    text: "Experience instant communication with real-time messaging. Send the receive messages instantly, share photos and videos, and never miss a moment. Stay in the loop, whether you're at home or on the go",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELYELLOW,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(-6deg)",
    },
  },
  {
    title: "Real-Time Messaging",
    text: "Experience instant communication with real-time messaging. Send the receive messages instantly, share photos and videos, and never miss a moment. Stay in the loop, whether you're at home or on the go",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELGREEN,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(6deg)",
    },
  },
  {
    title: "Real-Time Messaging",
    text: "Experience instant communication with real-time messaging. Send the receive messages instantly, share photos and videos, and never miss a moment. Stay in the loop, whether you're at home or on the go",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELVIOLET,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(-6deg)",
    },
  },
  {
    title: "Chat with multiple people made easy",
    text: "You can talk to any of your friends in private conversations, just log in and they will be there, because we haven't made the add function everyone know everyone; we are not missing requirements, that's a feature!",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELSALMON,
      color: Color.BLACK,
      width: "64%",
      transform: "rotate(-6deg)",
    },
  },
  {
    title: "Chat from everywhere!",
    text: "Techically if you're in Europa, or Jupiter II, the smallest of the four Galilean moons orbiting Jupiter; maybe our app it's not going to work, but since you're using it from there you're part of NASA, ESA orCNSA  so you'll figure things out.",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELBLUE,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(6deg)",
    },
  },
];

const LandingPage: React.FC = () => {
  return (
    <Layout className="layout">
      <LadingMenu />
      <Content className="content">
        <HeroSection />
        <div className="heroPosition">
          {chatContent.map((props, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <Chat key={index} {...props} />
          ))}
        </div>
        {/* <div className="aboutUs">a</div> */}
        {/* <div className="contactUs">a</div> */}
      </Content>
      <Footer>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};

export default LandingPage;
