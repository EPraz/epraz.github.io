import { intro } from "../../contants/intro";

const HeroTextContent = () => {
  return (
    <div className="intro-copy">
      <p className="intro-eyebrow">{intro.greeting}</p>
      <h1 id="intro-title" className="intro-title">
        <span>{intro.name.first}</span>{" "}
        <span className="intro-surname">{intro.name.last}</span>
      </h1>
      <p className="intro-role">{intro.role}</p>
      <p className="intro-description">{intro.description}</p>
      <div className="intro-actions">
        <a className="intro-primary" href={intro.primaryAction.href}>
          {intro.primaryAction.label}
        </a>
        <a className="intro-secondary" href={intro.secondaryAction.href}>
          {intro.secondaryAction.label}
        </a>
      </div>
    </div>
  );
};

export default HeroTextContent;
