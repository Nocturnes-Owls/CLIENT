import React from "react";

const About = ({ text }) => {
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
          <h1 className="title">{ text.title }</h1>

          <div>
            <p className="subtitle">
              { text.paragraphs.p1 }
            </p>
            <p className="subtitle">
              { text.paragraphs.p2 }
            </p>
          </div>

          <button className="subtitle">{ text.button }</button>
        </div>        
      </div>
    </section>
  );
};

export default About;
