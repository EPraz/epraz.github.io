import "./about.css";

const About = () => (
  <section id="about" tabIndex={-1} aria-labelledby="about-title" className="site-section">
    <div className="about-layout">
      <div>
        <p className="section-kicker">A little about me</p>
        <h2 id="about-title" className="section-title">Curiosity, in and out of code.</h2>
      </div>
      <div className="about-copy">
        <p>I enjoy the moment a difficult problem starts to make sense: following an issue, finding its cause and working through the details.</p>
        <p>I also enjoy the visual side of engineering. Taking a Figma design and turning it into a carefully built interface is a part of the work I care about.</p>
        <div className="about-interests">
          <p className="section-kicker">Beyond the screen</p>
          <p>Outside work, I enjoy reading and exercise.</p>
        </div>
        <a className="site-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>
);

export default About;
