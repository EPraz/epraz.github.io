import { useRef } from "react";
import { ScrollToSectionButton } from "../../components";
import { heroWords } from "../../contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroTextContent = () => {
  const contentRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
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
    },
    { scope: contentRef },
  );

  return (
    <header
      ref={contentRef}
      className="flex w-full flex-col justify-center px-5 md:px-20"
    >
      <div className="flex flex-col gap-7 max-w-[720px] md:max-w-[780px] xl:max-w-[820px]">
        <div className="hero-text">
          <h1>
            Shaping{" "}
            <span className="slide">
              <span className="wrapper">
                {heroWords.map((word, index) => (
                  <span
                    key={index}
                    className="flex items-center md:gap-3 gap-1 pb-2"
                  >
                    <img
                      src={word.imgPath}
                      alt={word.text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                    />
                    <span>{word.text}</span>
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <h2>into Real Projects</h2>
          <h2>that Deliver Results</h2>
        </div>

        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
          Hi, I'm Edwin, a Full Stack Developer crafting scalable web & mobile
          applications with React, React Native, .NET & Node.js — delivering
          real results from concept to deployment.
        </p>

        <ScrollToSectionButton
          className="md:w-80 md:h-16 w-60 h-12"
          targetId="counter"
        >
          View My Projects
        </ScrollToSectionButton>
      </div>
    </header>
  );
};

export default HeroTextContent;
