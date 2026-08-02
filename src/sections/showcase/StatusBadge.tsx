import type { Status } from "../../contants";

const StatusBadge = ({ status }: { status: Status }) => {
  const isLive = status === "live";
  return (
    <span
      className={`absolute top-3 right-3 z-10 rounded-full px-3 py-1 text-xs font-medium
      ${
        isLive ? "bg-emerald-500/90 text-black" : "bg-amber-500/90 text-black"
      }`}
    >
      {isLive ? "Live" : "Coming soon"}
    </span>
  );
};

export default StatusBadge;
