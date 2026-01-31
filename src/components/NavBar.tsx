// En tu NavBar.tsx
import { useEffect, useState } from "react";
import { navLinks } from "../contants";

type Props = {
  handleTurnOffStars: (turnOff: boolean) => void; // true = apagar
  starsOn: boolean;
};

// Icon-only toggle con tooltip sutil
function StarToggleIcon({
  on,
  onChange,
}: {
  on: boolean;
  onChange: (next: boolean) => void;
}) {
  const label = on ? "Disable stars" : "Enable stars";

  return (
    <div className="relative ">
      <button
        type="button"
        role="switch"
        aria-checked={on}
        aria-label={label}
        title={label}
        onClick={() => onChange(!on)}
        className={`inline-flex items-center justify-center rounded-full
          h-7 w-7 md:h-8 md:w-8 transition
          ${on ? "text-indigo-400" : "text-white/60"}
          hover:text-indigo-300 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400/60
          bg-white/5 hover:bg-white/10`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 md:h-5 md:w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
        <span className="sr-only">
          {on ? "Estrellas activadas" : "Estrellas desactivadas"}
        </span>
      </button>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
                   whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white
                    transition
                   opacity-100 translate-y-0
                   group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        {label}
      </span>
    </div>
  );
}

const NavBar = ({ handleTurnOffStars, starsOn }: Props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (next: boolean) => {
    handleTurnOffStars(!next);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <div className="flex items-center gap-2 md:gap-3">
          <a className="logo" href="#hero">
            Edwin Pile
          </a>
          <StarToggleIcon on={starsOn} onChange={handleToggle} />
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }, index) => (
              <li key={index} className="group">
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
