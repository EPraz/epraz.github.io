import FeaturedProject from "./FeaturedProject";
import "./showcase.css";

const Showcase = () => (
  <section id="work" tabIndex={-1} aria-labelledby="keelwatch-title" className="site-section">
    <p className="section-kicker">Selected work</p>
    <FeaturedProject />
  </section>
);

export default Showcase;
