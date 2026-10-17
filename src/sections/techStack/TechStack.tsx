import TitleHeader from "../../components/TitleHeader";
import { techStackImgs } from "../../contants";

const TechStack = () => {
  return (
    <section id="skills" tabIndex={-1} className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🤝 The Skills I Bring to the Table"
        />

        <div className="tech-grid">
          {techStackImgs.map((icon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1"
              tabIndex={0}
              aria-label={icon.name}
              title={icon.name}
            >
              <div className="tech-card-content flex flex-col items-center justify-center gap-3 py-6">
                <div className="tech-icon-wrapper flex items-center justify-center">
                  <img
                    src={icon.imgPath}
                    alt={icon.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] object-contain"
                  />
                </div>

                <div className="padding-x w-full text-center">
                  <p className="text-white text-sm md:text-base">{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
