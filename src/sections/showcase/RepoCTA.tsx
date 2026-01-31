const RepoCTA = ({
  url,
  size = "sm",
}: {
  url?: string;
  size?: "sm" | "md";
}) => {
  const enabled = !!url;
  const sizeCls = size === "sm" ? "h-9 px-3 text-sm" : "h-10 px-4";

  if (enabled) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center justify-center rounded-lg
          border border-white/15 text-white/90 hover:bg-white/5 transition
          ${sizeCls}`}
      >
        Repo
      </a>
    );
  }

  // Disabled state (cliente / privado)
  return (
    <span
      aria-disabled="true"
      title="Private repository"
      className={`inline-flex items-center justify-center rounded-lg
        border border-white/10 text-white/40 bg-white/5
        ${sizeCls} cursor-not-allowed select-none`}
    >
      Repo
    </span>
  );
};

export default RepoCTA;
