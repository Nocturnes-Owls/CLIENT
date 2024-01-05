import React from "react";
import Fella from "./Fella.jsx";

const Team = ({ title }) => {
  return (
    <section className="section container team-section">
      <h1 className="title">{title}</h1>
      <div className="container team-container">

        {/* OPTIMIZAR IMAGENES */}

        <Fella
          name="CRISTIAN BETANCUR"
          role="CEO DE FULGOL, FULLSTACK"
          img="cristian.png"
        />

        <Fella
          name="JOEL LOPEZ"
          role="FULLSTACK DEVELOPER"
          img="joeldefinitive.png"
        />

        <Fella
          name="KENY ESPINOZA"
          role="FULLSTACK DEVELOPER"
          img="lordkeny.png"
        />

        <Fella
          name="JULIAN CASTAÑO"
          role="FULLSTACK DEVELOPER"
          img="julian.png"
        />
      </div>
    </section>
  );
};

export default Team;
