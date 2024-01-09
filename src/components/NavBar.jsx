import React, { useEffect, useRef, useState } from "react";
import {
  BsList,
  // BsDiscord,
  BsTrophyFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { GiOwl } from "react-icons/gi";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
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

  const handleClickOutMenu = ( event ) => {
    if( menuRef.current && !menuRef.current.contains( event.target )) {
      setToggleMenu( false );
    }
  };

  useEffect(() => {
    document.addEventListener( "click", handleClickOutMenu )
    return () => {
      document.removeEventListener( "click", handleClickOutMenu )
    }
  }, []);

  return (
    <div className={`navbar-container`}>
      <nav>
        <menu id="header-menu" ref={ menuRef }>
          <button
            onClick={handleToggleMenu}
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
          </button>

          <button
            onClick={() => {
              handleNavToSection("about");
            }}
            className={toggleMenu ? "opt-2" : "opt-hidden"}
          >
            <BsFillPeopleFill />
          </button>

          <button
            onClick={() => {
              handleNavToSection("tournament");
            }}
            className={toggleMenu ? "opt-3" : "opt-hidden"}
          >
            <BsTrophyFill />
          </button>

          <button
            onClick={() => {
              handleNavToSection("team");
            }}
            className={toggleMenu ? "opt-4" : "opt-hidden"}
          >
            <GiOwl />
          </button>
        </menu>
      </nav>
    </div>
  );
};

export default NavBar;
