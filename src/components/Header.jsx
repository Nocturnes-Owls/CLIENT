import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Header = ({ title, text }) => {
  const [headerIn, setHeaderIn] = useState(false);

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setHeaderIn(true)
        observer.unobserve(entry.target)
      }
      console.log("Element no-visible");
    }, {
      threshold: 0.8,
    });
    
    const headerSection = document.getElementById("header");

    observer.observe(headerSection);

  }, []);

  return (
    <>
      <NavBar />
      <header id="header" className="header-container">
        <div className="container header-content">
          <div className={`header-text ${ headerIn && "header-text-animation-in"}`}>
            <h1>{title}</h1>
            <h2 className="subtitle">{text}</h2>
          </div>
          <div className={`header-image ${ headerIn && "header-image-animation-in" }`}>
            <img src="/owls.webp" alt="Five owls rest in the mountain" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
