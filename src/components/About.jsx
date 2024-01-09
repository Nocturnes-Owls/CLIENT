import React, { useEffect, useState } from "react";
import Button from "./Button";

const About = ({ text }) => {
  const [aboutIn, setAboutIn] = useState(false);

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
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAboutIn(true);
          observer.unobserve(entry.target);
        }
        console.log("Element no-visible");
      },
      {
        threshold: 0.1,
      }
    );

    const aboutSection = document.getElementById("about");

    observer.observe(aboutSection);
  }, []);

  return (
    <section id="about" className="section container about-container">
      <div className="about-content">
        <div className={`about-media-container ${aboutIn && "about-media-container-animation-in"}`}>
          <div className="about-media">
            <div></div>
            <div></div>
            <div className="about-img-container">
              <img className={`${aboutIn && "about-img-in"}`} src="buho-about.webp" alt="owl image" />
            </div>
          </div>
        </div>
        <div className={`about-textside ${aboutIn && "about-textside-animation-in"}`}>
          <h1 className="title">{text.title}</h1>
          <div>
            <p className="subtitle">{text.paragraphs.p1}</p>
            <p className="subtitle">{text.paragraphs.p2}</p>
          </div>
          <div
            className="about-btn"
            onClick={() => {
              handleNavToSection("contact");
            }}
          >
            <Button label="CONTACTANOS" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
