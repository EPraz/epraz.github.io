import FeaturedProject from "./FeaturedProject";
import SupportingProject from "./SupportingProject";
import UpcomingProject from "./UpcomingProject";
import { supportingProjects } from "../../contants/selectedProjects";
import "./showcase.css";
import "./project-technologies.css";

const Showcase = () => (
  <section id="work" tabIndex={-1} aria-labelledby="projects-title" className="site-section">
    <div className="projects-heading">
      <div>
        <p className="section-kicker">Selected work</p>
        <h2 id="projects-title" className="section-title">Projects</h2>
      </div>
      <p>Full-stack applications and focused frontend work. Explore the live projects and the decisions behind them.</p>
    </div>
    <FeaturedProject />
    <div className="supporting-projects">
      {supportingProjects.map((project) => <SupportingProject key={project.id} project={project} />)}
      <UpcomingProject />
    </div>
  </section>
);

export default Showcase;
