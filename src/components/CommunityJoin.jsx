import Button from "./Button"

const CommunityJoin = ({title, subtitle, image}) => {
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