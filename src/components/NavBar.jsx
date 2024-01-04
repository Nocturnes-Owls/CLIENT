import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [navEffect, setNavEffect] = useState(false);

  const navBlurEffect = () => {
    const scroll = window.scrollY;

    if (scroll > 50) setNavEffect(true);
    else setNavEffect(false);
  };

  useEffect(() => {
    addEventListener("scroll", navBlurEffect);
  }, []);

  return (
    <div className={`${navEffect && "navbar-container-blur"} navbar-container`}>
      <div className="container">
        <nav>
          <span>
            <img className="navbar-logo" src="/logo.webp" alt="owl head logo" />
          </span>

          <menu></menu>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
