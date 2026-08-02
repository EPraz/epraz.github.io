export type EmailConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
};

const emailEnv = {
  serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
};

export const getEmailConfig = (): EmailConfig | null => {
  const { serviceId, templateId, publicKey } = emailEnv;

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
};
