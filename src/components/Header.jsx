import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

const Header = ({ title, text }) => {
  const useObserverIntersection = (element, setStateHandler) => {
    
  }

  useEffect(() => {
    let headerSection = document.querySelector(".header-container");

    const verifyView = (entries) => {
      let entry = entries[0];
      if(entry.isIntersecting) {
        console.log("Element visible");
      }
      console.log("Element no-visible");
    };

    let observer = new IntersectionObserver(verifyView, {});

    observer.observe(headerSection);
  }, []);

  return (
    <>
      <NavBar />
      <header id="header" className="header-container">
        <div className="container header-content">
          <div className="header-text">
            <h1>{title}</h1>
            <h2>{text}</h2>
          </div>
          <div className="header-image">
            <img src="/owls.webp" alt="Five owls rest in the mountain" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
