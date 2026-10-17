import type { ReactNode } from "react";

export type ProjectActionSize = "sm" | "md";

type ProjectActionProps = {
  children: ReactNode;
  href?: string;
  id?: string;
  size?: ProjectActionSize;
  activeClassName?: string;
  disabledTitle: string;
};

const sizeClassNames: Record<ProjectActionSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "min-h-11 px-4",
};

const ProjectAction = ({
  children,
  href,
  id,
  size = "sm",
  activeClassName = "",
  disabledTitle,
}: ProjectActionProps) => {
  const sharedClassName = `inline-flex items-center justify-center rounded-lg border transition ${sizeClassNames[size]}`;

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`${sharedClassName} cursor-pointer border-white/15 text-white/90 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none ${activeClassName}`}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      id={id ? `${id}-disabled` : undefined}
      aria-disabled="true"
      title={disabledTitle}
      className={`${sharedClassName} cursor-not-allowed select-none border-white/10 bg-white/5 text-white/50`}
    >
      {children}
    </span>
  );
};

export default ProjectAction;
