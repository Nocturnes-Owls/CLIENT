import Button from "./Button"

const CommunityJoin = ({title, description, image}) => {
  return (
    <section className="bg-black section comunity">
      <div className="container">
        <div>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
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