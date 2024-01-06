import { 
    BsEnvelopeFill,
    BsDiscord,
    BsFacebook,
    BsInstagram,
    BsYoutube
  } from "react-icons/bs";

const SocialNetworks = ({gmail, discord, facebook, instagram, youtube}) => {
  return (
    <div className="social-networks">
        { gmail && <a href={gmail} className="icon" target="_blank"><BsEnvelopeFill/></a> }
        { discord && <a href={discord} className="icon" target="_blank"><BsDiscord/></a> }
        { facebook && <a href={facebook} className="icon" target="_blank"><BsFacebook/></a> }
        { instagram && <a href={instagram} className="icon" target="_blank"><BsInstagram/></a> }
        { youtube && <a href={youtube} className="icon" target="_blank"><BsYoutube/></a> }
    </div>
  )
}

export default SocialNetworks