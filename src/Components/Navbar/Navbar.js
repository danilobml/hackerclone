import "./Navbar.css";
import icon from "./icon.svg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <img src={icon} className="nav-icon" alt="HackerNews icon" />
        <h1>Hacker News</h1>
        <a href="#" className="nav-link">
          new
        </a>
        <a href="#" className="nav-link">
          past
        </a>
        <a href="#" className="nav-link">
          comments
        </a>
        <a href="#" className="nav-link">
          ask
        </a>
        <a href="#" className="nav-link">
          show
        </a>
        <a href="#" className="nav-link">
          jobs
        </a>
        <a href="#" className="nav-link">
          submit
        </a>
      </div>
      <div>
        <a href="#" className="log-link">
          login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
