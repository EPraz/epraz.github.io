import type { ContactFeedback as ContactFeedbackData } from "./contact.types";

type ContactFeedbackProps = {
  feedback: ContactFeedbackData;
};

const ContactFeedback = ({ feedback }: ContactFeedbackProps) => {
  const isSuccess = feedback.type === "success";

  return (
    <div
      id="contact-feedback"
      role={isSuccess ? "status" : "alert"}
      className={`mt-3 flex items-center justify-center gap-2 rounded px-4 py-3 text-sm text-white shadow ${
        isSuccess ? "bg-emerald-600" : "bg-red-600"
      }`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={isSuccess ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
        />
      </svg>
      <span>{feedback.message}</span>
    </div>
  );
};

export default ContactFeedback;
