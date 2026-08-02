import DOMPurify from "dompurify";
import type { ContactFieldName, ContactFormValues } from "./contact.types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const INITIAL_CONTACT_VALUES: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export const isContactField = (name: string): name is ContactFieldName =>
  name === "name" || name === "email" || name === "message";

export const sanitizeContactText = (value: string) =>
  DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });

export const isValidContactForm = (values: ContactFormValues) =>
  values.name.trim().length > 0 &&
  EMAIL_PATTERN.test(values.email.trim()) &&
  values.message.trim().length > 0;
