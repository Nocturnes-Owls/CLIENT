import React, { useEffect, useState } from "react";
import {
  BsList,
  BsDiscord,
  BsTrophyFill,
  BsFillHouseDoorFill,
  BsFillPeopleFill,
} from "react-icons/bs";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
  }, []);

  return (
    <div className={`navbar-container`}>
      <div className="container">
        <nav>
          <span>
            <img className="navbar-logo" src="/logo.webp" alt="owl head logo" />
          </span>

          <menu>
            <button
              className={`menu-btn ${toggleMenu && "menu-btn-on"}`}
              onClick={handleToggleMenu}
            >
              <BsList />
            </button>

            <div
              className={`menu-active ${
                toggleMenu ? "menu-animation-on" : "menu-animation-off"
              }`}
            ></div>

            <button className={toggleMenu ? "opt-1" : "opt-hidden"}>
              <BsFillHouseDoorFill />
            </button>

            <button className={toggleMenu ? "opt-2" : "opt-hidden"}>
              <BsFillPeopleFill />
            </button>

            <button className={toggleMenu ? "opt-3" : "opt-hidden"}>
              <BsTrophyFill />
            </button>

            <button className={toggleMenu ? "opt-4" : "opt-hidden"}>
              <BsDiscord />
            </button>
          </menu>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
