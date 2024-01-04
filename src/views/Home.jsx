// import Resources     from '../views/Resources';
// import JobOffers     from '../views/JobOffers';
// import Contact       from '../views/Contact';

import Contact       from "../components/Contact";
import Header        from "../components/Header";
import CommunityJoin from "../components/CommunityJoin";
import Tournament    from "../components/Tournament";
import About         from "../components/About";
// import Slider        from '../components/Slider'
import NavBar        from "../components/NavBar";
import Button        from "../components/Button";

const Home = () => {
  return (
    <div>

      {/* Experimental */}
      {/* <div className="flag">
      <span>
            <img className="navbar-logo" src="/logo.webp" alt="owl head logo" />
          </span>
      </div> */}
      {/* /!\/!\/!\/!\ --- ! --- /!\ /!\ /!\/!\ */}
      

      <NavBar />

      <Header
        title="Nocturne Owls"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />

      {/* <Slider/> */}
      <About 
        title="Nocturne Owls"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elite."
      />


      <CommunityJoin 
        title="Comunidad"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci veritatis quasi ex. Dicta optio consectetur aliquid modi, obcaecati fugiat accusamus aspernatur perferendis vero enim molestias numquam iste maxime quasi?"
        image="./comunity.webp"
      />
      <Tournament />
      <Contact />
    </div>
  );
};

export default Home;
