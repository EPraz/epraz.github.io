import { employment } from "../../contants/professional";
import Education from "./Education";
import "./experience.css";

const Experience = () => (
  <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className="site-section">
    <header className="section-heading">
      <p className="section-kicker">Professional experience</p>
      <h2 id="experience-title">From implementation to production.</h2>
      <p>Building features, following difficult issues and helping teams deliver reliable software.</p>
    </header>
    <ol className="career-list">
      {employment.map(({ company, role, period, summary, contributions }) => (
        <li className="career-entry" key={company}>
          <p className="career-period">{period}</p>
          <article aria-label={`${role} at ${company}`}>
            <h3>{company}</h3>
            <p className="career-role">{role}</p>
            <p className="career-summary">{summary}</p>
            <ul className="career-contributions">
              {contributions.map(({ title, detail }) => (
                <li key={title}><strong>{title}.</strong> {detail}</li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
    <Education />
    <a className="site-link" href="./cv/CV_Edwin_Pile.pdf" download>Download my CV <span aria-hidden="true">↓</span></a>
  </section>
);

export default Experience;
