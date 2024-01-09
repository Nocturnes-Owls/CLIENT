import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Button from "./Button";

const Header = ({ title, text }) => {
  const [headerIn, setHeaderIn] = useState(false);

  const handleNavToSection = (sectionId) => {
    const sectionTarget = document.getElementById(sectionId);

    if (sectionTarget) {
      window.scrollTo({
        top: sectionTarget.offsetTop,
      });
    }

    console.log(`The element ${sectionTarget} is not valid`);
  };

  useEffect(() => {
    
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setHeaderIn(true)
        observer.unobserve(entry.target)
      }
      // console.log("Element no-visible");
    }, {
      threshold: 0.1,
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
            <div onClick={() => {
              handleNavToSection("contact")
            }}>
              <Button label="CONTACTANOS"/>
            </div>
          </div>
          {/* <div className={`header-image ${ headerIn && "header-image-animation-in" }`}> */}
            <img className={`${ headerIn && "header-image-animation-in"}`} src="/owls.webp" alt="Five owls rest in the mountain" />
          {/* </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
