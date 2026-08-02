import type { Project } from "../../contants";
import LiveCTA from "./LiveCTA";
import RepoCTA from "./RepoCTA";
import ShowMoreText from "./ShowMoreText";
import StatusBadge from "./StatusBadge";

type ProjectCardProps = {
  project: Project;
};

const createProjectId = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="project-card group card-border flex flex-col overflow-hidden rounded-xl">
    <div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white/5"
      style={{ background: project.bg ?? "transparent" }}
    >
      <StatusBadge status={project.status} />
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className={`absolute inset-0 h-full w-full scale-[0.96] object-contain transition-transform duration-500 ease-out md:group-hover:scale-100 ${
          project.status === "coming-soon" ? "grayscale" : ""
        }`}
      />
      <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-white/10" />
    </div>

    <div className="flex grow flex-col gap-2 p-5 md:p-6">
      <h3 className="line-clamp-2 text-lg font-semibold text-white md:text-xl">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="line-clamp-1 text-sm text-white/70">
          {project.subtitle}
        </p>
      )}

      <ShowMoreText
        text={project.summary}
        lines={3}
        className="mt-1 text-sm text-white-50"
      />

      <div className="mt-2 line-clamp-1 text-xs text-white/60">
        {project.stack.join(" · ")}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-3">
        <LiveCTA
          status={project.status}
          url={project.liveUrl}
          id={`live-${createProjectId(project.title)}`}
          size="md"
        />
        <RepoCTA url={project.repoUrl} size="md" />
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-9 items-center rounded-lg border border-white/15 px-3 text-white/90 transition hover:bg-white/5"
          >
            Demo video
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;
