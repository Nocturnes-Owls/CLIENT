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
          <h2>LOGO</h2>
        </span>
        <menu>III</menu>
      </nav>
    </div>
  );
};

export default NavBar;
