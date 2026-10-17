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
  liveUrl: string;
  liveLabel: string;
  repoUrl?: string;
  note: string;
};

export const supportingProjects: SupportingProjectData[] = [
  {
    id: "project-management",
    title: "Project Management",
    category: "Full-stack application",
    summary:
      "Plan sprints, organize backlogs and track work across a drag-and-drop board. A React interface connects project planning and retrospectives to a NestJS API and PostgreSQL.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"],
    cover: "./images/portfolio/project-management-board.webp",
    coverAlt:
      "Project Management's live demo taskboard, with fictional Launchpad tickets arranged by status and assignee.",
    width: 1440,
    height: 1000,
    liveUrl: "https://project-management-murex-pi.vercel.app/",
    liveLabel: "Explore demo",
    repoUrl: "https://github.com/EPraz/projectManagement",
    note: "Shared, editable demo with fictional data. First access may take about a minute.",
  },
  {
    id: "navigate",
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
];
