import React from "react";

const Header = ({ title, text }) => {
  return (
    <div>
      <header className="header-content">
        <div className="header-text">
          <h1>{title}</h1>
          <h2>{text}</h2>
        </div>

        <div className="image-header-container">
          <img
            className="image-header"
            src="/owls.png"
            alt="Five owls rest in the mountain"
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
