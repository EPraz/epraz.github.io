import GlowCard from "../../components/GlowCard";
import ResponsibilitiesCard from "../../components/ResponsibilitiesCard";
import type { ExpCardsProps } from "../../contants";

type ExperienceCardProps = {
  experience: ExpCardsProps;
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <article className="exp-card-wrapper">
    <div className="xl:w-2/6">
      <GlowCard card={experience}>
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.imgPath}
            alt={`${experience.title} workplace`}
            className="max-h-[200px] max-w-[300px] rounded-lg object-contain shadow-lg"
            loading="lazy"
          />
        </div>
      </GlowCard>
    </div>

    <div className="xl:w-4/6">
      <div className="flex items-start">
        <div className="timeline-wrapper" aria-hidden="true">
          <div className="timeline">
            <span className="timeline-line" />
          </div>
          <div className="gradient-line h-full w-1" />
        </div>

        <ResponsibilitiesCard card={experience} />
      </div>
    </div>
  </article>
);

export default ExperienceCard;
