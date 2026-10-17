import { useRef } from "react";
import { ScrollToSectionButton } from "../../components";
import { heroWords } from "../../contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroTextContent = () => {
  const contentRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const motionPreference = gsap.matchMedia();

      motionPreference.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-text h1, .hero-text h2",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.inOut",
          },
        );
      });

      return () => motionPreference.revert();
    },
    { scope: contentRef },
  );

  return (
    <header
      ref={contentRef}
      className="flex w-full flex-col justify-center px-5 md:px-20"
    >
      <div className="flex flex-col gap-7 max-w-[720px] md:max-w-[780px] xl:max-w-[820px]">
        <div
          className="hero-text"
          role="heading"
          aria-level={1}
          aria-label="Building interfaces, APIs, data, and systems into reliable operational software."
        >
          <div aria-hidden="true">
            <h1>
              Building{" "}
              <span className="slide">
                <span className="wrapper">
                  {heroWords.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt=""
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h2>into reliable</h2>
            <h2>operational software.</h2>
          </div>
        </div>

        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
          I'm Edwin, a software engineer who builds maintainable web and mobile
          products—from accessible React interfaces to APIs, authorization,
          data models, and production delivery.
        </p>

        <ScrollToSectionButton
          className="md:w-80 md:h-16 w-60 h-12"
          targetId="work"
        >
          View My Projects
        </ScrollToSectionButton>
      </div>
    </header>
  );
};

export default HeroTextContent;
