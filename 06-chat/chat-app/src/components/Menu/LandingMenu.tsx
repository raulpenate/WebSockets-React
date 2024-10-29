import "../../css/LandingMenu.css";
import logo from "../../assets/logo.svg";

const LadingMenu = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="logoLi">
          <img src={logo} className="logo" alt="chambre logo" /> Chambre
        </li>
        <li>Chat</li>
        <li>About us</li>
        <li>Contact us</li>
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
