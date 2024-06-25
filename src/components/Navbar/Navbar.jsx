import Fire from "../../assets/fire.png";
import Star from "../../assets/glowing-star.png";
import Party from "../../assets/partying-face.png";
import DarkMode from "../DarkMode/DarkMode";

import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1>MovieApp</h1>

        <div className="navbar_links">
          <DarkMode />

          <a href="#popular">
            인기순
            <img className="navbar_emoji" src={Fire} alt="fire emoji" />
          </a>

          <a href="#top_rated">
            최고평점
            <img className="navbar_emoji" src={Star} alt="star emoji" />
          </a>

          <a href="#upcoming">
            예정작품
            <img className="navbar_emoji" src={Party} alt="party emoji" />
          </a>
        </div>
      </nav>
    </>
  );
}
