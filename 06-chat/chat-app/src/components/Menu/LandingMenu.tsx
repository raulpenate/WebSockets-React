import "../../css/LandingMenu.css";
import logo from "../../assets/logo.svg";
import type { Section } from "../../types/Section.type";

interface props {
  sections: Section<HTMLDivElement>;
  scrollToSection: <T extends HTMLElement>(
    elementRef: React.RefObject<T> | null
  ) => void;
}

const LadingMenu: React.FC<props> = ({ scrollToSection, sections }) => {
  return (
    <nav>
      <ul className="menu">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li onClick={() => scrollToSection(sections.index)} className="logoLi">
          <img src={logo} className="logo" alt="chambre logo" /> Chambre
        </li>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li onClick={() => scrollToSection(sections.chatFeatures)}>
          Chat Features
        </li>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li onClick={() => scrollToSection(sections.aboutUs)}>About us</li>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li onClick={() => scrollToSection(sections.contactUs)}>Contact us</li>
        <li>Login</li>
        <li className="liBtn">
          <button type="button" className="signUpBtn">
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default LadingMenu;
