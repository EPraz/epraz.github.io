import { capabilities, technologyGroups } from "../../contants/professional";
import "./tech-stack.css";
import ConnectedSystem from "./system/ConnectedSystem";

const TechStack = () => (
  <section id="skills" tabIndex={-1} aria-labelledby="skills-title" className="site-section">
    <header className="section-heading">
      <p className="section-kicker">Capabilities &amp; tools</p>
      <h2 id="skills-title">The pieces behind the work.</h2>
    </header>
    <div className="capability-grid">
      {capabilities.map(({ title, detail }) => (
        <article key={title}><h3>{title}</h3><p>{detail}</p></article>
      ))}
    </div>
    <div className="technology-groups">
      {technologyGroups.map(({ title, tools }) => (
        <div className="technology-group" key={title}>
          <h3>{title}</h3>
          <ul className="technology-list" aria-label={title}>
            {tools.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      ))}
    </div>
    <ConnectedSystem />
  </section>
);

export default TechStack;
