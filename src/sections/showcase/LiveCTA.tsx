import type { Status } from "../../contants";
import ProjectAction, { type ProjectActionSize } from "./ProjectAction";

type LiveCTAProps = {
  status: Status;
  url?: string;
  id: string;
  size?: ProjectActionSize;
};

const LiveCTA = ({ status, url, id, size = "md" }: LiveCTAProps) => (
  <ProjectAction
    href={status === "live" ? url : undefined}
    id={id}
    size={size}
    activeClassName="btn-primary-live select-none"
    disabledTitle={
      status === "demo-offline"
        ? "Live demo temporarily offline"
        : "Live demo unavailable"
    }
  >
    {status === "demo-offline" ? "Offline" : "Live"}
  </ProjectAction>
);

export default LiveCTA;
