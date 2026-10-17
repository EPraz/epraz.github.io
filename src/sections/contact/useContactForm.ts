import { useRef, useState } from "react";
import { useCooldown } from "../../hooks/useCooldown";
import { useIsMounted } from "../../hooks/useIsMounted";
import { isContactEmailEnabled, sendContactEmail } from "./contactEmail.service";
import { INITIAL_CONTACT_VALUES, getContactErrors, isContactField, sanitizeContactText } from "./contactForm.utils";
import type { ContactErrors, ContactFeedback, ContactFormValues } from "./contact.types";

const SUBMISSION_COOLDOWN_MS = 10_000;

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const submissionInFlight = useRef(false);
  const isMountedRef = useIsMounted();
  const { beginCooldown, isCoolingDown } = useCooldown(SUBMISSION_COOLDOWN_MS);
  const [values, setValues] = useState<ContactFormValues>(INITIAL_CONTACT_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [feedback, setFeedback] = useState<ContactFeedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (!isContactField(name)) return;
    setValues((current) => ({ ...current, [name]: sanitizeContactText(value) }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setFeedback(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submissionInFlight.current || isCoolingDown) return;
    if (!isContactEmailEnabled) {
      setFeedback({ type: "error", message: "The form is temporarily unavailable. Please email me directly." });
      return;
    }
    const formElement = event.currentTarget;
    const honeypot = new FormData(formElement).get("company");
    if (typeof honeypot === "string" && honeypot.trim()) {
      setFeedback({ type: "success", message: "Message sent successfully." });
      setValues(INITIAL_CONTACT_VALUES);
      return;
    }
    const nextErrors = getContactErrors(values);
    setErrors(nextErrors);
    const firstInvalidField = Object.keys(nextErrors)[0];
    if (firstInvalidField) {
      const field = formElement.elements.namedItem(firstInvalidField);
      if (field instanceof HTMLElement) field.focus();
      return;
    }
    submissionInFlight.current = true;
    setFeedback(null);
    setIsSubmitting(true);
    beginCooldown();
    try {
      await sendContactEmail(formElement);
      if (!isMountedRef.current) return;
      setFeedback({ type: "success", message: "Message sent successfully. Thanks for getting in touch." });
      setValues(INITIAL_CONTACT_VALUES);
    } catch {
      if (isMountedRef.current) {
        setFeedback({ type: "error", message: "The message could not be sent. Your draft is still here. Please try again or email me directly." });
      }
    } finally {
      submissionInFlight.current = false;
      if (isMountedRef.current) setIsSubmitting(false);
    }
  };

  return { formRef, values, errors, feedback, handleChange, handleSubmit, isEmailEnabled: isContactEmailEnabled, isSubmitting, isCoolingDown };
};
