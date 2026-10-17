import { useRef, useState } from "react";
import { navLinks } from "../contants/navLinks";
import { useActiveSection } from "./useActiveSection";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const activeSection = useActiveSection();

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="site-header-inner">
        <a className="site-brand" href="#hero" onClick={() => setMenuOpen(false)}>
          Edwin Pile
        </a>
        <button
          ref={menuButtonRef}
          className="site-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="primary-navigation"
          className="site-navigation"
          aria-label="Primary"
          data-open={menuOpen}
        >
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={link}>
                <a
                  href={link}
                  aria-current={activeSection === link ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="site-resume"
          href="./cv/CV_Edwin_Pile.pdf"
          download
          aria-label="Resume (download CV)"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default NavBar;
