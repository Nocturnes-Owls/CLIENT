import { useEffect} from "react"
import Button from "./Button";
import { observer } from "../utils/animationScroll";

const CommunityJoin = ({title, subtitle, image}) => {
  
  useEffect(()=> {
    const community = document.getElementById('community')
    observer.observe(community);
  }, [])

  return (
    <section id="community" className="bg-black section comunity">
      <div className="container">
        <div className="community-description">
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <a href="https://discord.gg/EBAcH6N9" target="_blank"><Button label="Unirse"/></a>
        </div>
        <div className="community-image">
          <img src={image} alt="Comunidad" className="community-image-principal" />
          <img src="./discord-letra.png" alt="logo discord"  className="logo-discord"/>
        </div>
      </div> 
    </section>
  )
}

export default CommunityJoin