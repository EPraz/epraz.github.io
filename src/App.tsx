import { useState } from "react";
import { NavBar, StarsCanvas } from "./components";
import {
  Contact,
  Experience,
  FeatureCards,
  Footer,
  Hero,
  Logo,
  Showcase,
  TechStack,
  // Testimonials,
} from "./sections";

const App = () => {
  const [starsOn, setStarsOn] = useState(true);
  // turnOff = true -> starsOn = false
  const handleTurnOffStars = (turnOff: boolean) => {
    setStarsOn(!turnOff);
  };

  return (
    <main>
      <div className="relative z-[10]">
        <StarsCanvas starsOn={starsOn} />
        <NavBar handleTurnOffStars={handleTurnOffStars} starsOn={starsOn} />
        <Hero />
        <Showcase />
        <Logo />
        <FeatureCards />
        <Experience />
        <TechStack />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
