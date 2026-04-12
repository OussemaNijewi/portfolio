import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import ExperinceSection from "./sections/ExperienceSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ExperinceSection />
      <LogoSection />
      <ShowcaseSection />
    </>
  );
};

export default App;
