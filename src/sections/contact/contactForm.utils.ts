import DOMPurify from "dompurify";
import type { ContactErrors, ContactFieldName, ContactFormValues } from "./contact.types";

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

export const getContactErrors = (values: ContactFormValues): ContactErrors => {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
};
