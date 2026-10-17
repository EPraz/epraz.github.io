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
  return (
    <a
      href={`#${targetId}`}
      className={`${className} cta-wrapper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`}
    >
      <span className="cta-button group relative">
        <span className="bg-circle" />
        <span className="text text-center">{children}</span>
        <span className="arrow-wrapper">
          <img
            src="./images/arrow-down.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4"
          />
        </span>
      </span>
    </a>
  );
};

export default ScrollToSectionButton;
