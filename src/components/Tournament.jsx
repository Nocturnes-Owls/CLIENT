import { 
  BsAward, 
  BsDiscord, 
  BsInstagram,
  BsYoutube  
} from "react-icons/bs";

const Tournament = ({title}) => {
  return (
    <section className='section tournament'>
      <div className='container'>
        <div className="hackaton-video">
          {/* <img src="./img-hackaton.webp" alt="Imagen hackaton" className="img-hackaton" /> */}
          <video src="./Hackaton-NocturnesOwls.mp4" type="video/mp4" controls="true" poster="hackatonPoster.webp"></video>
          {/* <div className="hackaton-social">
            <a href="#"><BsDiscord/></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><BsYoutube/></a>
          </div> */}
        </div>
        <div className="hackaton-description">
          <div className="hackaton-title">
            <h1 className="title">{title}</h1>
          </div>
          {/* <div className="hackaton-awards">
            <h2 className="awards-title">Premios:</h2>
            <li className="award"><span className="award-icon"><BsAward /></span> <span className="award-text">1ro: $500</span></li>
            <li className="award"><span className="award-icon"><BsAward /></span>  <span className="award-text">2do: $200</span></li>
            <li className="award"><span className="award-icon"><BsAward /></span> <span className="award-text">3ro: Membresía Napoleón Chat</span></li>
          </div> */}
          <div className="hackaton-btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeuWY9QghSuQvcTpgVvXR-AGreLnqLES5Qu-4NM_yiVOJsZgw/viewform" className="btn btnPrimary" target="_blank"> <span className="btn-text">Registro</span></a>
            <a href="https://drive.google.com/file/d/1pMS7smX9yma_0i_UQql0671A3sSUW86e/view?usp=drive_link" download="Torneo-Nocturne-Owl" className="btn btnPrimary" target="_blank"><span className="btn-text">Más Información</span></a>
          </div>
          <div className="hackaton-sponsor">
            <a href="#"><img src="./napoleon-chat.png" alt="Napoleon chat" /></a>
            <a href="#"><img src="./gonden_elf.webp" alt="Golden elf" /></a>
            <a href="#"><img src="./the-empire.webp" alt="The Empire" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tournament