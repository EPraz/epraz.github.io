import emailjs from "@emailjs/browser";
import { getEmailConfig } from "../../config/emailEnv";

const emailConfig = getEmailConfig();

export const isContactEmailEnabled = emailConfig !== null;

export const sendContactEmail = async (formElement: HTMLFormElement) => {
  if (!emailConfig) {
    throw new Error("EmailJS is not configured.");
  }

  await emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    formElement,
    emailConfig.publicKey,
  );
};
