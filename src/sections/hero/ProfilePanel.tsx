import { useState } from "react";
import { intro } from "../../contants/intro";
import "./profile-panel.css";

const profileFacts = [
  { label: "Based in", value: intro.location },
  { label: "Focus", value: intro.focus },
  { label: "Working with", value: intro.tools },
];

const ProfilePanel = () => {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <aside className="intro-profile" aria-label="Personal profile">
      <div className="intro-profile-caption">
        <span>Profile</span>
        <span>{intro.name.first} {intro.name.last}</span>
      </div>
      <div className="intro-profile-body">
        <figure className="intro-portrait">
          {portraitFailed ? (
            <div
              className="intro-portrait-fallback"
              role="img"
              aria-label="Portrait of Edwin Pile unavailable"
            >
              <span aria-hidden="true">EP</span>
              <span>Portrait unavailable</span>
            </div>
          ) : (
            <img
              src="./images/portfolio/edwin-portrait.webp"
              srcSet="./images/portfolio/edwin-portrait-small.webp 400w, ./images/portfolio/edwin-portrait.webp 800w"
              sizes="(min-width: 64rem) 368px, (min-width: 48rem) 240px, 40vw"
              width={800}
              height={753}
              alt="Illustrated portrait of Edwin Pile, smiling and wearing glasses"
              decoding="async"
              onError={() => setPortraitFailed(true)}
            />
          )}
        </figure>
        <dl className="intro-profile-facts">
          {profileFacts.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </aside>
  );
};

export default ProfilePanel;
