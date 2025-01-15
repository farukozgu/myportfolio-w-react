import "./App.css";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";
import html from "../src/assets/html.png";
import css from "../src/assets/css.png";
import bootstrap from "../src/assets/bootstrap.png";
import figma from "../src/assets/figma.png";
import javascript from "../src/assets/js.png";
import react from "../src/assets/react.png";
import tailwind from "../src/assets/tailwind.png";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const skills = [
    { skill: "Figma", info: "Design tool", skillImg: figma },
    { skill: "HTML", info: "Web standard", skillImg: html },
    { skill: "CSS", info: "User interface", skillImg: css },
    { skill: "Bootstrap", info: "User interface", skillImg: bootstrap },
    { skill: "Javascript", info: "Interaction", skillImg: javascript },
    { skill: "React", info: "Framework", skillImg: react },
    { skill: "Tailwind", info: "User interface", skillImg: tailwind },
  ];
  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Header />
        <Banner />
        <Skills skills={skills} />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
