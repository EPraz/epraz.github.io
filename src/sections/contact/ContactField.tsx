import type { ChangeEvent } from "react";
import type { ContactFieldName } from "./contact.types";

type ContactFieldProps = {
  name: ContactFieldName;
  label: string;
  value: string;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const ContactField = ({ name, label, value, error, onChange }: ContactFieldProps) => {
  const id = `contact-${name}`;
  const props = { id, name, value, onChange, required: true, "aria-invalid": error ? true : undefined, "aria-describedby": error ? `${id}-error` : undefined };
  return (
    <div className="contact-field">
      <label htmlFor={id}>{label}</label>
      {name === "message" ? (
        <textarea {...props} rows={5} />
      ) : (
        <input {...props} type={name === "email" ? "email" : "text"} autoComplete={name} />
      )}
      {error && <p id={`${id}-error`} className="contact-field-error">{error}</p>}
    </div>
  );
};

export default ContactField;
