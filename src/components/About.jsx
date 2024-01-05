import React from "react";

const About = ({ title, p1, p2, buttonText }) => {
  return (
    <section className="section about-container">
      <div className="about-content container">

      <div className="about-media-container">
          <div className="about-media">
            <div></div>
            <div></div>
            <div className="img-container">
              <img src="buho-about.webp" alt="owl image" />
            </div>
          </div>
        </div>

        <div className="about-textside">
          <h1 className="title">{ title }</h1>

          <div>
            <p className="subtitle">
              { p1 }
            </p>
            <p className="subtitle">
              { p2 }
            </p>
          </div>

          <button className="subtitle">{ buttonText }</button>
        </div>        
      </div>
    </section>
  );
};

export default About;
