import "../css/pages/LadingPage.css";
import { Color } from "../enums/Color";
import { Layout } from "antd";
import { useRef } from "react";
import HeroSection from "../components/landing/HeroSection";
import LadingMenu from "../components/Menu/LandingMenu";
import boy from "../assets/boy.svg?react";
import Chat from "../components/landing/ChatInfo";
import girl from "../assets/girl.svg?react";
import pm from "../assets/pm.svg?react";
import runner from "../assets/runner.svg?react";
import ux from "../assets/ux.svg?react";
import type { IChatContent } from "../interfaces/ChatContent.interface";
import type { Section } from "../types/Section.type";
import type React from "react";

const { Content, Footer } = Layout;

const chatContent: IChatContent[] = [
  {
    title: "The Multiverse of Messaging",
    text: "Join friends across dimensions! Forget adding everyone manually—just jump in and start chatting. It’s not a bug; it’s a feature! And who knows? You might even discover a parallel universe or two along the way.",
    imageSVG: pm,
    style: {
      backgroundColor: Color.PASTELYELLOW,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(-6deg)",
    },
    styleSVG: {
      width: "294px",
      height: "499px",
    },
  },
  {
    title: "Chat Like a Superhero",
    text: "Unleash your inner superhero with our messaging app! Communicate at the speed of light, send memes faster than a speeding bullet, and never let your sidekicks down. Whether you're saving the world or just catching up, we’ve got you covered.",
    imageSVG: girl,
    style: {
      backgroundColor: Color.PASTELGREEN,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(6deg)",
    },
  },
  {
    title: "Talks of Epic Proportions",
    text: "Engage in legendary conversations with your crew! No need for complicated friend requests; just dive right in! Because let’s face it, who needs a manual when you have the power of friendship?",
    imageSVG: boy,
    style: {
      backgroundColor: Color.PASTELVIOLET,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(-6deg)",
      flexDirection: "row-reverse",
    },
  },
  {
    title: "Conversations on the Go!",
    text: "Whether you’re scaling mountains or floating in zero gravity, our chat app keeps you connected! Even if you're orbiting a distant planet, you’ll still be in the loop. Just don’t forget to bring snacks—intergalactic travel can be exhausting!",
    imageSVG: runner,
    style: {
      backgroundColor: Color.PASTELSALMON,
      color: Color.BLACK,
      width: "64%",
      transform: "rotate(-6deg)",
    },
    styleSVG: {
      width: "294px",
      height: "499px",
    },
  },
  {
    title: "Anytime, Anywhere, Even Mars!",
    text: "Got a message to send from Mars? We can’t promise it’ll be instantaneous, but hey, you’re on a mission! Just keep your space helmet on and stay connected, even when you’re 140 million miles away.",
    imageSVG: ux,
    style: {
      backgroundColor: Color.PASTELBLUE,
      color: Color.BLACK,
      width: "32%",
      transform: "rotate(6deg)",
      flexDirection: "row-reverse",
    },
    styleSVG: {
      width: "294px",
      height: "499px",
    },
  },
];

const scrollToSection = <T extends HTMLElement>(
  elementRef: React.RefObject<T> | null
) => {
  if (!elementRef?.current) return;

  window.scrollTo({
    top: elementRef.current.offsetTop - (window.innerHeight * 0.07),
    behavior: "smooth",
  });
};

const LandingPage: React.FC = () => {
  const sections: Section<HTMLDivElement> = {
    index: useRef<HTMLDivElement>(null),
    chatFeatures: useRef<HTMLDivElement>(null),
    aboutUs: useRef<HTMLDivElement>(null),
    contactUs: useRef<HTMLDivElement>(null),
  };

  return (
    <Layout className="layout">
      <LadingMenu scrollToSection={scrollToSection} sections={sections} />
      <Content className="content">
        <HeroSection section={sections.index} />
        <div ref={sections.chatFeatures} className="heroPosition">
          <h1 className="chatApp">
            <span>C</span>
            <span>h</span>
            <span>a</span>
            <span>t</span>
            <span>&nbsp;</span>
            <span>F</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
          </h1>
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
