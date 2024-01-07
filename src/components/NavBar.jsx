import React, { useEffect, useState } from "react";
import {
  BsList,
  BsDiscord,
  BsTrophyFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { GiOwl } from "react-icons/gi";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenuOn = () => {
    setToggleMenu(true);
  };

  const handleToggleMenuOff = () => {
    setToggleMenu(false);
  };

  const handleNavToSection = (sectionId) => {
    const sectionTarget = document.getElementById(sectionId);

    if (sectionTarget) {
      window.scrollTo({
        top: sectionTarget.offsetTop,
      });
    }

    console.log(`The element ${sectionTarget} is not valid`);
  };

  useEffect(() => {}, []);

  return (
    <div className={`navbar-container`}>
      <nav>
        <menu
        onMouseOver={handleToggleMenuOn}
        onMouseOut={handleToggleMenuOff}
        >
          <button
            onClick={handleToggleMenuOn}
            className={`menu-btn ${toggleMenu && "menu-btn-on"}`}
          >
            <BsList />
          </button>

          <div
            className={`menu-active ${
              toggleMenu ? "menu-animation-on" : "menu-animation-off"
            }`}
          ></div>

          <button
            onClick={() => {
              handleNavToSection("header");
            }}
            className={toggleMenu ? "opt-1" : "opt-hidden"}
          >
            <BsFillHouseDoorFill />
            {/* <p>Home</p> */}
          </button>

          <button
            onClick={() => {
              handleNavToSection("about");
            }}
            className={toggleMenu ? "opt-2" : "opt-hidden"}
          >
            <BsFillPeopleFill />
            {/* <p>About</p> */}
          </button>

          <button
            onClick={() => {
              handleNavToSection("tournament");
            }}
            className={toggleMenu ? "opt-3" : "opt-hidden"}
          >
            <BsTrophyFill />
            {/* <p>Tournament</p> */}
          </button>

          <button
            onClick={() => {
              handleNavToSection("team");
            }}
            className={toggleMenu ? "opt-4" : "opt-hidden"}
          >
            <GiOwl />
            {/* <p>Team</p> */}
          </button>
        </menu>
      </nav>
    </div>
  );
};

export default NavBar;
