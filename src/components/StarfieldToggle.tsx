type StarfieldToggleProps = {
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
};

const StarfieldToggle = ({
  isEnabled,
  onChange,
}: StarfieldToggleProps) => {
  const label = isEnabled ? "Disable stars" : "Enable stars";

  return (
    <div className="group relative">
      <button
        type="button"
        role="switch"
        aria-checked={isEnabled}
        aria-label={label}
        title={label}
        onClick={() => onChange(!isEnabled)}
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 transition hover:cursor-pointer hover:bg-white/10 hover:text-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 md:h-8 md:w-8 ${
          isEnabled ? "text-indigo-400" : "text-white/60"
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 md:h-5 md:w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </button>

      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[10px] text-white opacity-0 transition group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
};

export default StarfieldToggle;
