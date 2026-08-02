import { useRef, type ReactNode } from "react";
import type { ExpCardsProps, TestimonialProps } from "../contants";

interface Props {
  children: ReactNode;
  card: ExpCardsProps | TestimonialProps;
}
const GlowCard = ({ card, children }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const cardElement = cardRef.current;
    if (!cardElement) return;

    const rect = cardElement.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    const angle = (Math.atan2(mouseY, mouseX) * (180 / Math.PI) + 360) % 360;

    cardElement.style.setProperty("--start", `${angle + 60}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />

      <div className="flex items-center gap-1 mb-5 ">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            src="/images/star.png"
            key={i}
            alt=""
            aria-hidden="true"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
