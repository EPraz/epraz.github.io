import { intro } from "../../contants/intro";

const HeroTextContent = () => {
  return (
    <div className="intro-copy">
      <p className="intro-eyebrow">{intro.role}</p>
      <h1 id="intro-title" className="intro-title">
        {intro.title.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
      <p className="intro-description">{intro.description}</p>
      <div className="intro-actions">
        <a className="intro-primary" href={intro.primaryAction.href}>
          {intro.primaryAction.label}
        </a>
        <a className="intro-secondary" href={intro.secondaryAction.href}>
          {intro.secondaryAction.label}
        </a>
      </div>
      <p className="intro-location">{intro.location}</p>
    </div>
  );
};

export default HeroTextContent;
