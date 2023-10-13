import "./Navbar.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function Navbar() {
  const [scrollTheme, setScrollTheme] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollEvent = () => {
      setScroll(window.scrollY);
      window.scrollY >= 100 ? setScrollTheme(true) : setScrollTheme(false);
    };
    window.addEventListener("scroll", scrollEvent);
    return function () {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scroll]);

  const logoClickHandler = () => {
    window.location.replace("/");
  };

  const searchClickHandler = () => {
    window.location.replace("/search");
  };

  return (
    <div
      className={
        scrollTheme
          ? "Navbar-container Navbar-dark_theme"
          : "Navbar-container Navbar-light_theme"
      }
    >
      <h1 onClick={logoClickHandler}>Movie App</h1>
      <FontAwesomeIcon
        icon="fa-magnifying-glass"
        onClick={searchClickHandler}
        className="Navbar-icon"
      />
    </div>
  );
}

export default Navbar;
