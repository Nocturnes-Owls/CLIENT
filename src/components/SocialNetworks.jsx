import { 
    BsEnvelopeFill,
    BsFacebook,
    BsInstagram,
    BsYoutube
  } from "react-icons/bs";

const SocialNetworks = ({gmail, facebook, instagram, youtube}) => {
  return (
    <div className="social-networks">
        { gmail && <a href={gmail} className="icon"><BsEnvelopeFill/></a> }
        { facebook && <a href={facebook} className="icon"><BsFacebook/></a> }
        { instagram && <a href={instagram} className="icon"><BsInstagram/></a> }
        { youtube && <a href={youtube} className="icon"><BsYoutube/></a> }
    </div>
  )
}

export default SocialNetworks