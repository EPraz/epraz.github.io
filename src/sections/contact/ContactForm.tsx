import ContactFeedback from "./ContactFeedback";
import { useContactForm } from "./useContactForm";

const ContactForm = () => {
  const {
    formRef,
    values,
    feedback,
    handleChange,
    handleSubmit,
    isEmailEnabled,
    isFormValid,
    isSubmitting,
    isCoolingDown,
  } = useContactForm();
  const isSubmitDisabled =
    isSubmitting || isCoolingDown || !isFormValid || !isEmailEnabled;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-7"
      aria-describedby={feedback ? "contact-feedback" : undefined}
    >
      <div>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          placeholder="What’s your good name?"
          required
        />
      </div>

      <div>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder="What’s your email address?"
          required
        />
      </div>

      <div>
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          rows={5}
          required
        />
      </div>

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {feedback && <ContactFeedback feedback={feedback} />}

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <span className="cta-button group">
          <span className="bg-circle" />
          <span className="text">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
          <span className="arrow-wrapper">
            <img src="./images/arrow-down.svg" alt="" aria-hidden="true" />
          </span>
        </span>
      </button>

      {!isEmailEnabled && (
        <p className="text-center text-sm text-yellow-300">
          Contact form unavailable. Email me at{" "}
          <a className="underline" href="mailto:epilepra@gmail.com">
            epilepra@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
};

export default ContactForm;
