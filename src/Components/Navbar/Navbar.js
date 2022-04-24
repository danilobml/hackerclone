import "./Navbar.css";
import icon from "./icon.svg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <img src={icon} className="nav-icon" alt="HackerNews icon" />
        <h1>Hacker News</h1>
        <a href="#">new</a> |<a href="#">past</a> |<a href="#">comments</a> |<a href="#">ask</a> |<a href="#">show</a> |<a href="#">jobs</a> |<a href="#">submit</a>
      </div>
      <div>
        <input type="text" placeholder="Search" />
        <button type="submit" className="search-button">
          <FaSearch className="searcg-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
