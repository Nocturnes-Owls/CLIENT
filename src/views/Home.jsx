import Contact from "../components/Contact";
import Header from "../components/Header";
import CommunityJoin from "../components/CommunityJoin";
import Tournament from "../components/Tournament";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header
        title="NOCTURNE OWLS"
        text="Bienvenidos a la comunidad de los búhos nocturnos, una comunidad de desarrolladores de proyectos que se esfuerzan por crear proyectos innovadores y sostenibles."
      />

      {/* <Slider/> */}
      <About
        text={{
          title: "ACERCA DE NOSOTROS",
          paragraphs: {
            p1: "El principio fundamental de la comunidad de los búhos nocturnos es la solidaridad. Los miembros de la comunidad se apoyan mutuamente y se ayudan a alcanzar sus objetivos. Esto refleja el compromiso de la comunidad con la cooperación y el trabajo en equipo, dos cualidades esenciales para los desarrolladores de proyectos.",
            p2: "La comunidad de los búhos nocturnos también es una fuente de inspiración para los desarrolladores de proyectos. Los miembros de la comunidad comparten sus conocimientos y experiencias, lo que ayuda a otros a aprender y crecer. Además, la comunidad organiza eventos y talleres que promueven la innovación y el desarrollo sostenible.",
          },
          button: "CONTACTANOS",
        }}
      />
      <CommunityJoin
        title="Comunidad"
        subtitle="Si eres un desarrollador de proyectos que busca una comunidad solidaria e inspiradora, te invitamos a unirte a la comunidad de los búhos nocturnos."
        image="./community.png"
      />
      <Tournament title="HACKATON" />
      <Contact
        description="No dejes de aclarar tus dudas o dejar algun comentario para nosotros."
      />
      <Team title="NUESTRO EQUIPO" />
      <Footer />
    </div>
  );
};

export default Home;
