import { contactLinks } from "../../contants/contact";

const ContactUnavailable = ({ loading = false }: { loading?: boolean }) => (
  <div className="site-section">
    <p className="section-kicker">Contact</p>
    <h2 className="section-title">Let’s talk.</h2>
    <p>{loading ? "Loading the form. You can also reach me directly." : "The form is temporarily unavailable. You can still reach me directly."}</p>
    <div className="section-actions">
      <a className="site-link" href={contactLinks.mailto}>Send an email</a>
      <a className="site-link" href={contactLinks.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </div>
);

export default ContactUnavailable;
