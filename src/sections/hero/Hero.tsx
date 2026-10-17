import HeroTextContent from "./HeroTextContent";
import "./hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="intro"
      aria-labelledby="intro-title"
    >
      <HeroTextContent />
    </section>
  );
};

export default Hero;
