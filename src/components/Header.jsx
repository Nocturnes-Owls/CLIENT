import React from "react";

const Header = ({ title, text }) => {
  return (
    <div>
      <header className="header-content">
        <video
          src="/backgroundheader.mp4"
          autoPlay
          loop
          muted
        ></video>

        <div className="video-filter"></div>

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
