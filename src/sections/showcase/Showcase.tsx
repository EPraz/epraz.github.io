import FeaturedProject from "./FeaturedProject";
import NavigateProject from "./NavigateProject";
import "./showcase.css";

const Showcase = () => (
  <section id="work" tabIndex={-1} aria-label="Selected work" className="site-section">
    <p className="section-kicker">Selected work</p>
    <FeaturedProject />
    <NavigateProject />
  </section>
);

export default Showcase;
