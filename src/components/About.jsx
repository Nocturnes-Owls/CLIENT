import React from "react";

const About = ({ title, text }) => {
  return (
    <section className="section about-container">
      {/* Seccion texto e imagenes */}
      <div className="about-content container">
        {/* texto */}
        <div className="about-textside">
          <h1 className="title">ABOUT US</h1>

          <div>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              asperiores aut nam aliquid molestiae deserunt culpa, pariatur quis
              numquam odit nulla, ullam similique at amet ea voluptas eius
              quisquam in.
            </p>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              asperiores aut nam aliquid molestiae deserunt culpa, pariatur quis
              numquam odit nulla, ullam similique at amet ea voluptas eius
              quisquam in.
            </p>
          </div>

          <button className="subtitle">CONTACT US</button>
        </div>

        <div className="about-media-container">
          <div className="about-media">
            <div></div>
            <div></div>
            <div className="img-container">
              <img src="buho-about.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
