import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import ExperinceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ExperinceSection />
      <LogoSection />
      <ShowcaseSection />
      <TechStack />
      <ContactSection />
    </>
  );
};

export default App;
