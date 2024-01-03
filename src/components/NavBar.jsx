import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [navEffect, setNavEffect] = useState(false);

  const navBlurEffect = () => {
    const scroll = window.scrollY;

    if (scroll > 100) setNavEffect(true);
    else setNavEffect(false);
  };

  useEffect(() => {
    addEventListener("scroll", navBlurEffect);
  }, []);

  return (
    <div className={`${navEffect && "navbar-container-blur"} navbar-container`}>
      <nav>
        <span>
          <img className="navbar-logo" src="/logo.webp" alt="owl head logo" />
        </span>
        <menu>III</menu>
      </nav>
    </div>
  );
};

export default NavBar;
