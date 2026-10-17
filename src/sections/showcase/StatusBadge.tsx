import type { Status } from "../../contants";

const statusPresentation: Record<
  Status,
  { label: string; className: string }
> = {
  live: { label: "Live", className: "bg-emerald-500/90 text-black" },
  "demo-offline": {
    label: "Demo offline",
    className: "bg-slate-300/90 text-black",
  },
  "coming-soon": {
    label: "Coming soon",
    className: "bg-amber-500/90 text-black",
  },
};

const StatusBadge = ({ status }: { status: Status }) => {
  const presentation = statusPresentation[status];

  return (
    <span
      className={`absolute top-3 right-3 z-10 rounded-full px-3 py-1 text-xs font-medium ${presentation.className}`}
    >
      {presentation.label}
    </span>
  );
};

export default StatusBadge;
