const SystemDiagram = () => (
  <svg viewBox="0 0 600 300" role="img" aria-label="Diagram of interface, API and data responsibilities" className="system-diagram">
    <g fill="none" stroke="var(--site-border)" strokeWidth="2">
      <path d="M164 177h70m130 0h70" />
      <path d="m225 171 9 6-9 6m200-12 9 6-9 6" stroke="var(--site-accent)" />
    </g>
    <g stroke="var(--site-link)" strokeWidth="2">
      <rect x="46" y="106" width="118" height="82" rx="4" fill="var(--site-surface)" />
      <path d="M46 125h118M66 142h45m-45 13h76m-76 13h59M105 188v19m-29 0h58" fill="none" />
    </g>
    <g stroke="var(--site-accent)" strokeWidth="2">
      <path d="m235 116 65-27 65 27-65 28zm0 0v27l65 28 65-28v-27m-130 53 65 28 65-28m-130 0v27l65 28 65-28v-27" fill="var(--site-surface)" />
      <path d="M300 144v27m0 26v27" fill="none" />
    </g>
    <g stroke="var(--site-muted)" strokeWidth="2" fill="var(--site-surface)">
      <path d="M436 124v73c0 28 118 28 118 0v-73" />
      <ellipse cx="495" cy="124" rx="59" ry="19" />
      <path d="M436 149c0 27 118 27 118 0m-118 25c0 27 118 27 118 0" fill="none" />
    </g>
  </svg>
);

export default SystemDiagram;
