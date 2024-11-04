import { Button } from "antd";
import logo from "../../assets/logo.svg";
import people from "../../assets/people.svg";

interface props {
  section: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<props> = ({ section }) => {
  const repoUrl =
    "https://github.com/raulpenate/WebSockets-React?tab=readme-ov-file#websockets-with-react-and-socketio";

  return (
    <div ref={section} className="container">
      <div className="info">
        <div className="logoContainer">
          <img src={logo} className="logoImg" alt="chambre logo" />
        </div>
        <h1 className="title">Chambre</h1>
        <p className="text">
          Write, talk, and communicate in a private and secure space with your
          loved ones—and even those you’re not so fond of. Join us on a journey
          to redefine social interaction, all while embracing the anxiety that
          often comes with real-life interactions for using our platform too
          much.
        </p>
        <Button className="registerBtn">Register for free!</Button>
        <p className="postData">
          This app may be funny, but it operates as intended{" "}
          <a
            href={repoUrl}
            target="_blank"
            className="repoUrl"
            rel="noreferrer"
          >
            Check the repo
          </a>
        </p>
      </div>
      <div className="peopleContainer">
        <img src={people} className="peopleImg" alt="people chatting" />
      </div>
    </div>
  );
};

export default HeroSection;