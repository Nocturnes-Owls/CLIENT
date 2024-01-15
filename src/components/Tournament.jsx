import { useEffect } from "react";
import { observer } from "../utils/animationScroll";

const Tournament = ({title}) => {
  useEffect(()=> {
    const tournament = document.getElementById('tournament')
    observer.observe(tournament);
  }, [])

  return (
    <section id="tournament" className='section tournament'>
      <div className='container'>
        <div className="hackaton-video">
          <video src="/hackaton.mp4" type="video/mp4" controls={true} poster="hackatonPoster.webp"></video>
        </div>
        <div className="hackaton-description">
          <div className="hackaton-title">
            <h1 className="title">{title}</h1>
          </div>
          <div className="hackaton-btn">
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuWY9QghSuQvcTpgVvXR-AGreLnqLES5Qu-4NM_yiVOJsZgw/viewform" className="btn btnPrimary" target="_blank" rel="noopener noreferrer"> <span className="btn-text">Registro</span></a> */}
            <a href="https://drive.google.com/file/d/1Pv-H23PLGxppZlXqaYwJZA4V_FSBOyhY/view?usp=drivesdk" download="Torneo-Nocturne-Owl" className="btn btnPrimary" target="_blank" rel="noopener noreferrer"><span className="btn-text">Información</span></a>
          </div>
          <div className="hackaton-sponsor">
            <a href="https://napoleon.chat/" target="_blank"><img src="/sponsors/napoleon-chat.png" alt="Napoleon chat" /></a>
            <a href="https://goldenelf.io/" target="_blank"><img src="/sponsors/golden_elf.webp" alt="Golden elf" /></a>
            <a href="https://www.theempire.tech/" target="_blank"><img src="/sponsors/the-empire.webp" alt="The Empire" /></a>
            <a href="#"><img src="/sponsors/fulgol.webp" alt="Fulgol" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tournament