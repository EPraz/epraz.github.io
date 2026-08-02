import { navLinks } from "../contants";
import { useScrollThreshold } from "../hooks/useScrollThreshold";
import StarfieldToggle from "./StarfieldToggle";

type NavBarProps = {
  isStarfieldEnabled: boolean;
  onStarfieldChange: (isEnabled: boolean) => void;
};

const NavBar = ({
  isStarfieldEnabled,
  onStarfieldChange,
}: NavBarProps) => {
  const hasScrolled = useScrollThreshold();

  return (
    <header
      className={`navbar ${hasScrolled ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner">
        <div className="flex items-center gap-2 md:gap-3">
          <a className="logo" href="#hero">
            Edwin Pile
          </a>
          <StarfieldToggle
            isEnabled={isStarfieldEnabled}
            onChange={onStarfieldChange}
          />
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={link} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/cv/CV_Edwin_Pile.pdf" download className="contact-btn group">
          <div className="inner">
            <span>Download CV</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
