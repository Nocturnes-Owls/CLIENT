import React, { useEffect, useState } from "react";
import Fella from "./Fella.jsx";

const Team = ({ title }) => {
  const [teamIn, setTeamIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTeamIn(true);
          observer.unobserve(entry.target);
        }
        console.log("Element no-visible");
      },
      {
        threshold: 0.1,
      }
    );

    const teamSection = document.getElementById("team");

    observer.observe(teamSection);
  }, []);

  return (
    <section id="team" className="section team-section">
      <div className="container">
        <h1 className={`title ${teamIn && "team-title-animation-in"}`}>{title}</h1>
        <div className={`container team-container ${teamIn && "team-container-animation-in"}`}>
          <Fella
            fella={{
              name: "CRISTIAN BETANCUR",
              rol: "CEO DE FULGOL, FULLSTACK",
              img: "cristian.webp",
              linkedIn:
                "https://www.linkedin.com/in/cristian-betancur-galan-507818176/",
              gitHub: "https://github.com/cristiandbetancurg",
              portfolio: "https://dribbble.com/cristiandbetancurg",
            }}
          />
          <Fella
            fella={{
              name: "JOEL LOPEZ",
              rol: "FULLSTACK DEVELOPER",
              img: "joeldefinitive.webp",
              linkedIn: "https://www.linkedin.com/in/buhonocturno/",
              gitHub: "https://github.com/djoel95",
              portfolio: "",
            }}
          />
          <Fella
            fella={{
              name: "KENY ESPINOZA",
              rol: "FRONT-END DEVELOPER",
              img: "lordkeny.webp",
              linkedIn:
                "https://www.linkedin.com/in/keny-espinoza-luis-45b8b5193/",
              gitHub: "https://github.com/KEspinozaLuis",
              portfolio: "https://portfolio-kel.vercel.app/",
            }}
          />
          <Fella
            fella={{
              name: "JULIAN CASTAÑO",
              rol: "FULLSTACK DEVELOPER",
              img: "julian.webp",
              linkedIn:
                "https://www.linkedin.com/in/julian-casta%C3%B1o-a-264a89278/",
              gitHub: "https://github.com/hielocuantico",
              portfolio: "",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
