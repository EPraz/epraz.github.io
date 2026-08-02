import { useRef } from "react";
import { TitleHeader } from "../../components";
import { expCards } from "../../contants";
import ExperienceCard from "./ExperienceCard";
import { useExperienceAnimations } from "./useExperienceAnimations";

const Experience = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  useExperienceAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((experience) => (
              <ExperienceCard
                key={experience.title}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
