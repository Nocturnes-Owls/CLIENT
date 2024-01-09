
const Tournament = ({title}) => {
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuWY9QghSuQvcTpgVvXR-AGreLnqLES5Qu-4NM_yiVOJsZgw/viewform" className="btn btnPrimary" target="_blank" rel="noopener noreferrer"> <span className="btn-text">Registro</span></a>
            <a href="https://drive.google.com/file/d/1WBfVNIARlMxOWQEndrBSHI6uqRjYyuYg/view?usp=drive_link" download="Torneo-Nocturne-Owl" className="btn btnPrimary" target="_blank" rel="noopener noreferrer"><span className="btn-text">Más Información</span></a>
          </div>
          <div className="hackaton-sponsor">
            <a href="#"><img src="/napoleon-chat.png" alt="Napoleon chat" /></a>
            <a href="#"><img src="/gonden_elf.webp" alt="Golden elf" /></a>
            <a href="#"><img src="/the-empire.webp" alt="The Empire" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tournament