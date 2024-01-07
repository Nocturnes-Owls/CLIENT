import React from "react";

const Header = ({ title, text }) => {
  return (
    <header id="header" className="header-container">
      <div className="video-filter"></div>

      <div className="container header-content">
        <div className="header-text">
          <h1>{title}</h1>
          <h2>{text}</h2>
        </div>

        <div className="image-header">
          <img src="/owls.png" alt="Five owls rest in the mountain" />
        </div>
      </div>
    </header>
  );
};

export default Header;
