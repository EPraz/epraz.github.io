import { useState } from "react";
import { keelwatch } from "../../contants/keelwatch";
import ProjectAction from "./ProjectAction";

const FeaturedProject = () => {
  const [imageUnavailable, setImageUnavailable] = useState(false);

  return (
    <article
      aria-labelledby="keelwatch-title"
      className="card-border mb-8 overflow-hidden rounded-xl lg:grid lg:grid-cols-2"
    >
      <div className="flex flex-col gap-5 p-5 md:p-8">
        <p className="text-sm font-semibold text-white-50">Featured project</p>
        <div>
          <h3
            id="keelwatch-title"
            className="text-3xl font-semibold md:text-4xl"
          >
            {keelwatch.title}
          </h3>
          <p className="mt-2 text-lg text-white-50">{keelwatch.subtitle}</p>
          <p className="mt-3 text-sm text-white/80">{keelwatch.role}</p>
        </div>
        <p className="text-base leading-relaxed text-white-50">
          {keelwatch.summary}
        </p>
        <p className="border-l-2 border-blue-50 pl-4 text-base leading-relaxed text-white-50">
          {keelwatch.evidence}
        </p>
        <p className="text-sm text-white/80">{keelwatch.stack.join(" · ")}</p>
        <div className="flex flex-wrap gap-3">
          <ProjectAction
            href={keelwatch.caseStudyUrl}
            size="md"
            disabledTitle="Case unavailable"
          >
            Read case study
          </ProjectAction>
          <ProjectAction
            href={keelwatch.liveUrl}
            size="md"
            activeClassName="btn-primary-live"
            disabledTitle="Demo unavailable"
          >
            Explore demo
          </ProjectAction>
          <ProjectAction
            href={keelwatch.repoUrl}
            size="md"
            disabledTitle="Repository unavailable"
          >
            View code
          </ProjectAction>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white-50">
          <a
            className="featured-link"
            href={keelwatch.demoUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Watch product walkthrough (4:48)
          </a>
          <a
            className="featured-link"
            href={keelwatch.transcriptUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Transcript and chapters
          </a>
        </div>
        <p className="text-sm leading-relaxed text-white/80">
          Original personal project with synthetic data. Shared demo accounts
          identify the role account, not individual visitors.
        </p>
      </div>
      <figure className="flex min-w-0 flex-col justify-center gap-4 bg-white/5 p-5 md:p-8">
        <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-lg bg-black-100">
          {imageUnavailable ? (
            <p role="status" className="p-5 text-base text-white-50">
              Preview unavailable. The case study and contextual captures
              explain the same workflow.
            </p>
          ) : (
            <img
              src={keelwatch.cover}
              alt={keelwatch.coverAlt}
              width="1440"
              height="1100"
              loading="lazy"
              decoding="async"
              onError={() => setImageUnavailable(true)}
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <figcaption className="text-sm leading-relaxed text-white-50">
          Real local app, API and PostgreSQL · synthetic data.{" "}
          <a
            className="featured-link"
            href={keelwatch.captureUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            Follow the six Maintenance captures
          </a>
          .
        </figcaption>
      </figure>
    </article>
  );
};

export default FeaturedProject;
