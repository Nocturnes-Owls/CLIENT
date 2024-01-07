import { 
    BsEnvelopeFill,
    BsDiscord,
    BsGithub,
    BsInstagram,
    BsYoutube
  } from "react-icons/bs";

const SocialNetworks = ({gmail, discord, github, instagram, youtube}) => {
  return (
    <div className="social-networks">
        { gmail && <a href={`mailto:${gmail}`} className="icon" target="_blank"><BsEnvelopeFill/></a> }
        { discord && <a href={discord} className="icon" target="_blank"><BsDiscord/></a> }
        { github && <a href={github} className="icon" target="_blank"><BsGithub/></a> }
        { instagram && <a href={instagram} className="icon" target="_blank"><BsInstagram/></a> }
        { youtube && <a href={youtube} className="icon" target="_blank"><BsYoutube/></a> }
    </div>
  )
}

export default SocialNetworks