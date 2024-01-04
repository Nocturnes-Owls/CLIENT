import React from "react";

const About = ({ title, text }) => {
  return (
    <div className="about-container">
      <section className="about-grid">
        {/* <h1>{title}</h1>
        <p>{text}</p>
        <p></p> */}
        <div>
          <h1>ABOUT US</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            asperiores aut nam aliquid molestiae deserunt culpa, pariatur quis
            numquam odit nulla, ullam similique at amet ea voluptas eius
            quisquam in.
          </h2>
        </div>

        <div>
          <h1>Imagen</h1>
        </div>

        <div>
          <h1>Imagen</h1>
        </div>

        <div>
          <button>
            CONTACT US
          </button>
        </div>        
      </section>
    </div>
  );
};

export default About;
