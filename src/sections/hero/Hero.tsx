import HeroTextContent from "./HeroTextContent";
import StaticAssembly from "./StaticAssembly";
import "./hero.css";

const Hero = () => {
  return (
    <section
      id="hero"
      tabIndex={-1}
      className="intro"
      aria-labelledby="intro-title"
    >
      <div className="intro-layout">
        <HeroTextContent />
        <StaticAssembly />
      </div>
    </section>
  );
};

export default Hero;
