import type { Project } from "./projects";

export const keelwatch = {
  title: "Keelwatch",
  subtitle: "Connected maritime operations with traceable changes",
  role: "Independent full-stack developer",
  summary:
    "Operations teams need to keep vessel records, certificate risks, crew plans and maintenance changes connected. I built the React workflows, NestJS APIs and PostgreSQL rules, with server-enforced permissions and a shared change history.",
  stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Prisma"],
  cover: "./images/portfolio/keelwatch-fleet.webp",
  coverAlt:
    "Keelwatch's Fleet register, showing synthetic vessels, registry numbers and statuses in the read-only live demo.",
  conflictCover: "./images/keelwatch-maintenance-review.png",
  conflictCoverAlt:
    "Keelwatch Maintenance rejects a stale save and compares the previous record, current values and the retained draft.",
  caseStudyUrl:
    "https://github.com/EPraz/keelwatch/blob/master/docs/flagship/CASE_STUDY.md",
  liveUrl: "https://keelwatch-chi.vercel.app/sign-in",
  repoUrl: "https://github.com/EPraz/keelwatch",
  demoUrl: "https://github.com/EPraz/keelwatch#product-walkthrough-448",
  transcriptUrl:
    "https://github.com/EPraz/keelwatch/blob/master/docs/flagship/PRODUCT_WALKTHROUGH.md",
  captureUrl:
    "https://github.com/EPraz/keelwatch/blob/master/docs/flagship/MAINTENANCE_JOURNEY.md",
  evidence:
    "A stale Maintenance save is rejected without losing the draft. The editor reviews newer values before saving; confirmed changes and their history commit together.",
  status: "live",
} satisfies Project & {
  coverAlt: string;
  conflictCover: string;
  conflictCoverAlt: string;
  transcriptUrl: string;
  captureUrl: string;
  evidence: string;
};
