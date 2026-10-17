import { education, languages } from "../../contants/professional";

const Education = () => (
  <div className="education-layout">
    <div>
      <h3 className="career-subheading">Education</h3>
      <ul className="education-list">
        {education.map(({ degree, institution, period }) => (
          <li key={degree}>
            <p className="education-period">{period}</p>
            <h4>{degree}</h4>
            <p>{institution}</p>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="career-subheading">Languages</h3>
      <dl className="language-list">
        {languages.map(({ name, level }) => (
          <div key={name}><dt>{name}</dt><dd>{level}</dd></div>
        ))}
      </dl>
    </div>
  </div>
);

export default Education;
