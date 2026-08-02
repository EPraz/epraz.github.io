export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldName = keyof ContactFormValues;

export type ContactFeedback = {
  type: "success" | "error";
  message: string;
};
