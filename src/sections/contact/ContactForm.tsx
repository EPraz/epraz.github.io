import ContactFeedback from "./ContactFeedback";
import ContactField from "./ContactField";
import { contactLinks } from "../../contants/contact";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const { formRef, values, errors, feedback, handleChange, handleSubmit, isEmailEnabled, isSubmitting, isCoolingDown } = useContactForm();
  const isSubmitDisabled = isSubmitting || isCoolingDown || !isEmailEnabled;
  let buttonLabel = "Send message";
  if (isSubmitting) buttonLabel = "Sending…";
  else if (isCoolingDown) buttonLabel = "Please wait…";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" aria-label="Contact form" aria-busy={isSubmitting} aria-describedby={feedback ? "contact-help contact-feedback" : "contact-help"} noValidate>
      <ContactField name="name" label="Name" value={values.name} error={errors.name} onChange={handleChange} />
      <ContactField name="email" label="Email" value={values.email} error={errors.email} onChange={handleChange} />
      <ContactField name="message" label="Message" value={values.message} error={errors.message} onChange={handleChange} />
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="contact-honeypot" />
      {feedback && <ContactFeedback feedback={feedback} />}
      <button type="submit" disabled={isSubmitDisabled} className="site-button site-button-primary">{buttonLabel}</button>
      <p id="contact-help" role="status" className="contact-help">
        {isCoolingDown && <>Please wait a few seconds before sending another message.<br /></>}
        <a className="site-link" href={contactLinks.mailto}>Prefer your email app?</a>
      </p>
      {!isEmailEnabled && <p className="contact-unavailable">The form is temporarily unavailable. Please use the email link.</p>}
    </form>
  );
};

export default ContactForm;
