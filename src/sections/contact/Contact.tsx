import { contactLinks } from "../../contants/contact";
import ContactForm from "./ContactForm";
import "./contact.css";

const Contact = () => (
  <div className="site-section contact-layout">
    <div className="contact-intro">
      <p className="section-kicker">Contact</p>
      <h2 className="section-title">Let’s build something thoughtful.</h2>
      <p>Have a project, a software engineering role or an interesting problem in mind? I’d like to hear about it.</p>
      <a className="site-link contact-address" href={contactLinks.mailto}>{contactLinks.email}</a>
      <div className="section-actions">
        <a className="site-link" href={contactLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a className="site-link" href={contactLinks.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <ContactForm />
  </div>
);

export default Contact;
