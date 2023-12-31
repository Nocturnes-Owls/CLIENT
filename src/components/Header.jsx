import React from "react";

const Header = ({ title, text, imgRoute }) => {
  return (
    <div>
      <header className="header-content">

        <img
          className="image-header"
          src="/owls.png"
          alt="Five owls rest in the mountain"
        />

        <div className="header-text">
          <h1>{title}</h1>
          <h2>{text}</h2>
        </div>

      </header>
    </div>
  );
};

export default Header;
