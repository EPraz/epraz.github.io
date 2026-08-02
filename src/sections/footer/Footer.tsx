import { socialImgs } from "../../contants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a
            href="https://github.com/EPraz"
            target="_blank"
            rel="noreferrer noopener"
          >
            Visit my GitHub
          </a>
        </div>

        <div className="socials flex gap-4">
          {socialImgs.map((img) => (
            <a
              key={img.name}
              href={img.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={img.name}
              className="icon flex items-center justify-center w-10 h-10 rounded-full"
            >
              <img
                src={img.imgPath}
                alt={img.name}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            @{new Date().getFullYear()} Edwin Pile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
