import React from "react";
import Button from "./Button";

const About = ({ text }) => {
  const handleNavToSection = (sectionId) => {
    const sectionTarget = document.getElementById(sectionId);

    if (sectionTarget) {
      window.scrollTo({
        top: sectionTarget.offsetTop,
      });
    }

    console.log(`The element ${sectionTarget} is not valid`);
  };
  return (
    <section id="about" className="section container about-container">
      <div className="about-content">
        <div className="about-media-container">
          <div className="about-media">
            <div></div>
            <div></div>
            <div className="about-img-container">
              <img src="buho-about.webp" alt="owl image" />
            </div>
          </div>
        </div>
        <div className="about-textside">
          <h1 className="title">{text.title}</h1>
          <div>
            <p className="subtitle">{text.paragraphs.p1}</p>
            <p className="subtitle">{text.paragraphs.p2}</p>
          </div>
          <div className="about-btn" onClick={ () => { handleNavToSection("contact") }}>
            <Button label="CONTACTANOS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
