import { upcomingProject } from "../../contants/selectedProjects";

const UpcomingProject = () => (
  <article className="supporting-project" aria-labelledby={`${upcomingProject.id}-title`}>
    <div className="supporting-project-media project-placeholder">
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="7" y="9" width="34" height="30" rx="2" />
        <path d="M7 17h34M15 25h18m-18 6h11" />
      </svg>
      <p>Preview coming soon</p>
    </div>
    <div className="supporting-project-body">
      <p className="section-kicker">{upcomingProject.category}</p>
      <h3 id={`${upcomingProject.id}-title`}>{upcomingProject.title}</h3>
      <p className="supporting-project-summary">{upcomingProject.summary}</p>
      <ul className="project-technologies" aria-label={`${upcomingProject.title} technologies`}>
        {upcomingProject.stack.map((tool) => <li key={tool}>{tool}</li>)}
      </ul>
      <p className="project-development-status">{upcomingProject.status}</p>
    </div>
  </article>
);

export default UpcomingProject;
