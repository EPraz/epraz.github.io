import { contactLinks } from "../../contants/contact";

const Footer = () => (
  <footer className="site-footer">
    <p>© {new Date().getFullYear()} Edwin Pile</p>
    <div className="section-actions">
      <a className="site-link" href={contactLinks.github} target="_blank" rel="noreferrer">GitHub</a>
      <a className="site-link" href={contactLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
      <a className="site-link" href="#hero">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
