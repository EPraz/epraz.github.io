interface Props {
  className: string;
  text: string;
  id: string;
}

const Button = ({ text, className, id }: Props) => {
  return (
    <a
      className={`${className ?? ""} cta-wrapper`}
      id={id}
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
    >
      <div className="cta-button group relative">
        <div className="bg-circle" />
        <p className="text text-center ">{text}</p>
        <div className="arrow-wrapper ">
          <img src="/images/arrow-down.svg" alt="arrow" className="h-4 w-4" />
        </div>
      </div>
    </a>
  );
};

export default Button;
