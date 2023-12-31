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
      <NavBar />

      <Header
        title="Nocturne Owls"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />

      {/* <Slider/> */}
      <About />
      <CommunityJoin />
      <Tournament />
      <Contact />
      <Button />
    </div>
  );
};

export default Home;
