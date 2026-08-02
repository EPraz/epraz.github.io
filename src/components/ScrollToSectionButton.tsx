type ScrollToSectionButtonProps = {
  className?: string;
  children: string;
  targetId: string;
};

const ScrollToSectionButton = ({
  className = "",
  children,
  targetId,
}: ScrollToSectionButtonProps) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${className} cta-wrapper`}
      onClick={handleClick}
    >
      <span className="cta-button group relative">
        <span className="bg-circle" />
        <span className="text text-center">{children}</span>
        <span className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
        </span>
      </span>
    </button>
  );
};

export default ScrollToSectionButton;
