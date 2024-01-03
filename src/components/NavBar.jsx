import React, { useEffect } from "react";

const NavBar = () => {
  const navBar = document.querySelector(".navbar-container");

  function blurAnimation() {
    if ( window.scrollY > 100 ){
      navBar.classList.add("navbar-container-blur")
    } else {
      navBar.classList.remove("navbar-container-blur");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", blurAnimation);
  }, []);

  return (
    <div className="navbar-container">
      <nav>
        <span>
          <h2>LOGO</h2>
        </span>
        <menu>III</menu>
      </nav>
    </div>
  );
};

export default NavBar;
