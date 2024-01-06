// import Resources     from '../views/Resources';
// import JobOffers     from '../views/JobOffers';
// import Contact       from '../views/Contact';

// import Slider        from '../components/Slider'
// import Button        from '../components/Button';

import Contact from "../components/Contact";
import Header from "../components/Header";
import CommunityJoin from "../components/CommunityJoin";
import Tournament from "../components/Tournament";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />

      <Header
        title="Nocturne Owls"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />

      {/* <Slider/> */}
      <About
        text={{
          title: "ABOUT US",
          paragraphs: {
            p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, asperiores aut nam aliquid molestiae deserunt culpa, pariatur quis numquam odit nulla, ullam similique at amet ea voluptas eiusquisquam in.",
            p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, asperiores aut nam aliquid molestiae deserunt culpa, pariatur quisnumquam odit nulla, ullam similique at amet ea voluptas eius quisquam in.",
          },
          button: "CONTACT US"
        }}
      />

      <Team title="MEET OUR TEAM" />

      <CommunityJoin
        title="Comunidad"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci veritatis quasi ex. Dicta optio consectetur aliquid modi, obcaecati fugiat accusamus aspernatur perferendis vero enim molestias numquam iste maxime quasi?"
        image="./comunity.webp"
      />
      <Tournament title="HACKATON" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
