import ProjectAction, { type ProjectActionSize } from "./ProjectAction";

type RepoCTAProps = {
  url?: string;
  size?: ProjectActionSize;
};

const RepoCTA = ({ url, size = "sm" }: RepoCTAProps) => (
  <ProjectAction
    href={url}
    size={size}
    disabledTitle="Private repository"
  >
    Repo
  </ProjectAction>
);

export default RepoCTA;
