import { useState } from "react";
import { contactLinks } from "../contants/contact";
import "./ContactRail.css";

const contacts = [
  {
    label: "Send an email", href: contactLinks.mailto, external: false,
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  },
  {
    label: "LinkedIn", href: contactLinks.linkedIn, external: true,
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r="0.75" fill="currentColor" stroke="none" /></>,
  },
  {
    label: "GitHub", href: contactLinks.github, external: true,
    icon: <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.5-.5-2.1 3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0 0 19.5 5a5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C5.8.9 4.6 1.3 4.6 1.3A5 5 0 0 0 4.5 5a5.4 5.4 0 0 0-1.4 3.8c0 5.4 3.3 6.6 6.4 7-.6.5-.6 1.2-.5 2.1v3.4" />,
  },
];

const ContactRail = () => {
  const [hintDismissed, setHintDismissed] = useState(false);

  return (
    <nav
      className="contact-rail"
      aria-label="Contact shortcuts"
      data-hint-dismissed={hintDismissed}
      onKeyDown={(event) => {
        if (event.key === "Escape") setHintDismissed(true);
      }}
    >
      <ul>
        {contacts.map(({ label, href, external, icon }) => (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              onPointerEnter={() => setHintDismissed(false)}
              onFocus={() => setHintDismissed(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icon}</svg>
              <span aria-hidden="true">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactRail;
