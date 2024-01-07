import Button from "./Button"

const CommunityJoin = ({title, subtitle, image}) => {
  return (
    <section id="" className="bg-black section comunity">
      <div className="container">
        <div>
          <h1 className="title">{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <Button label="Unirse"/>
        </div>
        <div>
          <img src={image} alt="Comunidad" />
        </div>
      </div> 
    </section>
  )
}

export default CommunityJoin