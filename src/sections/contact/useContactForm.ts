import { useEffect, useRef, useState } from "react";
import { useCooldown } from "../../hooks/useCooldown";
import { useIsMounted } from "../../hooks/useIsMounted";
import {
  isContactEmailEnabled,
  sendContactEmail,
} from "./contactEmail.service";
import {
  INITIAL_CONTACT_VALUES,
  isContactField,
  isValidContactForm,
  sanitizeContactText,
} from "./contactForm.utils";
import type {
  ContactFeedback,
  ContactFormValues,
} from "./contact.types";

const FEEDBACK_DURATION_MS = 3_000;
const SUBMISSION_COOLDOWN_MS = 10_000;

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const isMountedRef = useIsMounted();
  const { beginCooldown, isCoolingDown } = useCooldown(
    SUBMISSION_COOLDOWN_MS,
  );
  const [values, setValues] = useState<ContactFormValues>(
    INITIAL_CONTACT_VALUES,
  );
  const [feedback, setFeedback] = useState<ContactFeedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!feedback) return;

    const feedbackTimer = window.setTimeout(
      () => setFeedback(null),
      FEEDBACK_DURATION_MS,
    );

    return () => window.clearTimeout(feedbackTimer);
  }, [feedback]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    if (!isContactField(name)) return;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: sanitizeContactText(value),
    }));
    setFeedback(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isContactEmailEnabled) {
      setFeedback({
        type: "error",
        message:
          "Contact form is temporarily unavailable. Please email me directly.",
      });
      return;
    }

    if (isSubmitting || isCoolingDown) return;

    const formElement = event.currentTarget;
    const honeypot = new FormData(formElement).get("company");

    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      setFeedback({ type: "success", message: "Message sent successfully!" });
      setValues(INITIAL_CONTACT_VALUES);
      return;
    }

    if (!isValidContactForm(values)) {
      setFeedback({
        type: "error",
        message: "Please complete all fields with a valid email.",
      });
      return;
    }

    setIsSubmitting(true);
    beginCooldown();

    try {
      await sendContactEmail(formElement);

      if (!isMountedRef.current) return;

      setFeedback({ type: "success", message: "Message sent successfully!" });
      setValues(INITIAL_CONTACT_VALUES);
    } catch (error) {
      console.error("EmailJS request failed", error);

      if (isMountedRef.current) {
        setFeedback({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } finally {
      if (isMountedRef.current) {
        setIsSubmitting(false);
      }
    }
  };

  return {
    formRef,
    values,
    feedback,
    handleChange,
    handleSubmit,
    isEmailEnabled: isContactEmailEnabled,
    isFormValid: isValidContactForm(values),
    isSubmitting,
    isCoolingDown,
  };
};
