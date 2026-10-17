import HeroTextContent from "./HeroTextContent";
import ProfilePanel from "./ProfilePanel";
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
        <ProfilePanel />
      </div>
    </section>
  );
};

export default Hero;
