import "../assets/styles/index.scss";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";
import Slider from "../components/Slider/Slider";

function Home() {
  return (
    <>
      <Main
        subTitle="Architecture design"
        title="Professional
        Interior Design"
        text="Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostruercitation ullamco laboris"
      />
      <Slider />
      <About />
      <Projects />
      <Team />
    </>
  );
}

export default Home;
