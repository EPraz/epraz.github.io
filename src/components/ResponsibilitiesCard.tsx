import type { ExpCardsProps } from "../contants";

type ResponsibilitiesCardProps = {
  card: ExpCardsProps;
};

const ResponsibilitiesCard = ({ card }: ResponsibilitiesCardProps) => (
  <div className="experience-copy relative z-20 flex gap-5 md:gap-10 xl:gap-20">
    <div className="timeline-logo">
      <img src={card.logoPath} alt={`${card.title} logo`} loading="lazy" />
    </div>

    <div>
      <h3 className="text-3xl font-semibold">{card.title}</h3>
      <p className="my-5 text-white-50">📅 {card.date}</p>
      <p className="italic text-[#839cb5]">Responsibilities</p>
      <ul className="ms-5 mt-5 flex list-disc flex-col gap-5 text-white-50">
        {card.responsibilities.map((responsibility) => (
          <li key={responsibility} className="text-lg">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ResponsibilitiesCard;
