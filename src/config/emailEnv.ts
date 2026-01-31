export const emailEnv = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

export function validateEmailEnv() {
  const missing = Object.entries(emailEnv)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length > 0) {
    throw new Error(
      `[EmailJS] Missing environment variables: ${missing.join(", ")}`,
    );
  }

  return emailEnv;
}
