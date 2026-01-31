// Showcase.tsx (grid de tamaño uniforme)
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { projects, type Status } from "../../contants";
import LiveCTA from "./LiveCTA";
import StatusBadge from "./StatusBadge";
import ShowMoreText from "./ShowMoreText";
import RepoCTA from "./RepoCTA";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.9 },
    );
    ScrollTrigger.batch(".project-card", {
      start: "top 85%",
      onEnter: (els) =>
        gsap.to(els, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        }),
    });
    gsap.set(".project-card", { y: 24, opacity: 0 });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section-padding">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card group card-border rounded-xl overflow-hidden flex flex-col"
          >
            {/* Imagen con proporción fija; cubre todo el contenedor */}
            <div
              className="relative w-full aspect-[16/10] overflow-hidden rounded-lg bg-white/5"
              style={{ background: p.bg ?? "transparent" }}
            >
              <StatusBadge status={p.status as Status} />
              <img
                src={p.cover}
                alt={p.title}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-contain
                    transition-transform duration-500 ease-out
                    ${p.status === "coming-soon" ? "grayscale" : ""}
                    scale-[0.96] md:group-hover:scale-100`}
              />
              <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />
            </div>

            {/* Contenido */}
            <div className="p-5 md:p-6 flex flex-col gap-2 grow">
              <h3 className="text-white text-lg md:text-xl font-semibold line-clamp-2">
                {p.title}
              </h3>
              {p.subtitle && (
                <p className="text-white/70 text-sm line-clamp-1">
                  {p.subtitle}
                </p>
              )}

              <ShowMoreText
                text={p.summary}
                lines={3}
                className="text-white-50 text-sm mt-1"
              />

              <div className="mt-2 text-xs text-white/60 line-clamp-1">
                {p.stack.join(" · ")}
              </div>

              {/* CTAs pegados al fondo para altura pareja */}
              <div className="mt-auto flex flex-wrap gap-3 pt-3">
                <LiveCTA
                  status={p.status as Status}
                  url={p.liveUrl}
                  id={`live-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  size="md"
                />
                <RepoCTA url={p.repoUrl} size="md" />
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center h-9 px-3 rounded-lg border border-white/15 text-white/90 hover:bg-white/5 transition"
                  >
                    Demo video
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
