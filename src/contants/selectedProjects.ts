import { navigateProject } from "./navigate";

export type SupportingProjectData = {
  id: string;
  title: string;
  category: string;
  summary: string;
  stack: string[];
  cover: string;
  coverAlt: string;
  width: number;
  height: number;
  repoUrl?: string;
  walkthroughUrl?: string;
  note: string;
} & (
  | { status: "live"; liveUrl: string; liveLabel: string }
  | { status: "in-development"; liveUrl?: never; liveLabel?: never }
);

export const supportingProjects: SupportingProjectData[] = [
  {
    id: "project-management",
    title: "Project Management",
    category: "Full-stack application",
    summary:
      "Plan sprints, organize backlogs and track work across a drag-and-drop board. A React interface connects project planning and retrospectives to a NestJS API and PostgreSQL.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"],
    cover: "./images/portfolio/project-management-taskboard.webp",
    coverAlt:
      "Project Management's Launchpad taskboard, with fictional tickets and tasks arranged in workflow columns from Todo to Done.",
    width: 1440,
    height: 1000,
    status: "in-development",
    repoUrl: "https://github.com/EPraz/projectManagement",
    note: "Demo temporarily unavailable while the project is being updated.",
  },
  {
    id: "navigate",
    status: "live",
    title: navigateProject.title,
    category: "Frontend website",
    summary:
      "A maritime landing page with English and Spanish content, responsive service sections, legal pages and client-side form validation.",
    stack: navigateProject.stack,
    cover: navigateProject.cover,
    coverAlt: navigateProject.coverAlt,
    width: 1024,
    height: 2050,
    liveUrl: navigateProject.liveUrl,
    liveLabel: "Visit website",
    note: "Live bilingual website. Source repository private.",
  },
  {
    id: "aster",
    status: "live",
    title: "Aster",
    category: "Sales & marketing dashboard",
    summary:
      "A frontend workspace for a fictional audio store. Record demo sales and follow their impact across revenue, inventory and campaign results.",
    stack: ["React Native Web", "Expo", "TypeScript", "Playwright"],
    cover: "./images/portfolio/aster-overview.webp",
    coverAlt:
      "Aster's live dashboard in its light theme, with sales metrics, a revenue chart and campaign results for a fictional audio store.",
    width: 1440,
    height: 1000,
    liveUrl: "https://dashboard-one-rose-14.vercel.app/dashboard",
    liveLabel: "Explore demo",
    repoUrl: "https://github.com/EPraz/dashboard",
    walkthroughUrl: "https://dashboard-one-rose-14.vercel.app/walkthrough",
    note: "Fictional data. Changes stay in your browser; no account or real payments.",
  },
];
