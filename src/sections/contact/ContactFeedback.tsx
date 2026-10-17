import type { ContactFeedback as Feedback } from "./contact.types";

const ContactFeedback = ({ feedback }: { feedback: Feedback }) => (
  <div id="contact-feedback" role={feedback.type === "success" ? "status" : "alert"} data-kind={feedback.type} className="contact-feedback">
    {feedback.message}
  </div>
);

export default ContactFeedback;
