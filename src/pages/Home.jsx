import About from "../components/About";
import Contact from "../components/Contact";
import HomePart from "../components/HomePart";
import ProjectCound from "../components/ProjectCound";
//import Service from "../components/Service";<Service></Service>

const Home = () => {
  return (
    <>
      <HomePart></HomePart>
      <About></About>
      
      <ProjectCound></ProjectCound>
      <Contact></Contact>
    </>
  );
};

export default Home;
