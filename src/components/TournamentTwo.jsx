import { 
  BsAward, 
  BsDiscord, 
  BsInstagram,
  BsYoutube  
} from "react-icons/bs";

const TournamentTwo = () => {
  return (
    <section className='section tournamentTwo'>
      <div className="hackaton-video2">
          <video src="./Hackaton-NocturnesOwls.mp4" type="video/mp4" controls="true" poster="hackatonPoster.webp"></video>
         
        </div>
        <div className='container'>
        <div className="hackaton-description">
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

export default TournamentTwo