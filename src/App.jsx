import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import SplashCursor from "./component/SplashCursor";
import ParticleBackground from "./component/ParticleBackground";

function App() {
  return(
    <>
      <ParticleBackground/>
      <SplashCursor />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;