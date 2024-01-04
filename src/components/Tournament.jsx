import { 
  BsAward, 
  BsDiscord, 
  BsInstagram,
  BsYoutube  
} from "react-icons/bs";

const Tournament = ({title, subtitle}) => {
  return (
    <section className='section tournament'>
      <div className='container'>
        <div className="hackaton-img">
          <img src="./img-hackaton.webp" alt="Imagen hackaton" className="img-hackaton" />
          <div className="hackaton-social">
            <a href="#"><BsDiscord/></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><BsYoutube/></a>
          </div>
        </div>
        <div className="hackaton-description">
          <div className="hackaton-title">
            <h1 className="title">{title}</h1>
          </div>
          <div className="hackaton-awards">
            <h2 className="awards-title">Premios:</h2>
            <li className="award"><span className="award-icon"><BsAward /></span> <span className="award-text">1ro: $500</span></li>
            <li className="award"><span className="award-icon"><BsAward /></span>  <span className="award-text">2do: $200</span></li>
            <li className="award"><span className="award-icon"><BsAward /></span> <span className="award-text">3ro: Membresía Napoleón Chat</span></li>
          </div>
          <div className="hackaton-btn">
            <a href="#" className="btn">Más Información</a>
          </div>
          <div className="hackaton-sponsor">
            <a href="#"><img src="./napoleon-chat.png" alt="Napoleon chat" /></a>
            <a href="#"><img src="./gonden_elf.webp" alt="Golden elf" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tournament