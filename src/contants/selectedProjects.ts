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
  walkthroughLabel?: string;
  note: string;
} & (
  | { status: "live"; liveUrl: string; liveLabel: string }
  | { status: "in-development" | "unpublished"; liveUrl?: never; liveLabel?: never }
);

export const supportingProjects: SupportingProjectData[] = [
  {
    id: "project-management",
    title: "Project Management",
    category: "Full-stack application",
    summary:
      "Plan sprints, track tickets and tasks, and review delivery together. A React workspace connects to a NestJS API and PostgreSQL, with real-time updates across sessions.",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "Socket.IO"],
    cover: "./images/portfolio/project-management-overview.webp",
    coverAlt:
      "Project Management's redesigned Orbit overview, showing project progress, selected sprint metrics and ticket states with fictional demo data.",
    width: 1440,
    height: 1000,
    status: "live",
    liveUrl: "https://project-management-murex-pi.vercel.app/",
    liveLabel: "Explore demo",
    repoUrl: "https://github.com/EPraz/projectManagement",
    walkthroughUrl: "https://project-management-murex-pi.vercel.app/walkthrough",
    note: "Shared, editable demo with fictional data. The API may take about a minute to wake; the video opens independently.",
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
  {
    id: "bruma",
    status: "live",
    title: "Bruma Café",
    category: "Coffee storefront",
    summary:
      "A responsive coffee store in English, Spanish and Portuguese. Explore origins, choose product variants and complete a simulated purchase with a persistent cart and discount codes.",
    stack: ["React", "TypeScript", "i18next", "Playwright"],
    cover: "./images/portfolio/bruma-overview.webp",
    coverAlt:
      "Bruma Café's live English storefront, with its coffee-roasting photograph, origin-led introduction and link to explore the coffees.",
    width: 1440,
    height: 1000,
    liveUrl: "https://coffee-shop-app-nine-lilac.vercel.app/",
    liveLabel: "Explore demo",
    repoUrl: "https://github.com/EPraz/coffee-shop-app",
    walkthroughUrl: "https://coffee-shop-app-nine-lilac.vercel.app/walkthrough",
    note: "Fictional brand. Cart saved in your browser; checkout is simulated, with no real payments or orders.",
  },
  {
    id: "jerskits",
    status: "live",
    title: "Jerskits",
    category: "Football-shirt storefront",
    summary:
      "A trilingual football-shirt store with team, size and price filters. Choose available sizes, manage a persistent bag and complete a simulated guest checkout.",
    stack: ["React", "TypeScript", "i18next", "Playwright"],
    cover: "./images/portfolio/jerskits-overview.webp",
    coverAlt:
      "Jerskits' live English storefront, featuring the Liverpool shirt over oversized club typography with collection and product links.",
    width: 1440,
    height: 1000,
    liveUrl: "https://jerskits-marketplace.vercel.app/",
    liveLabel: "Explore demo",
    repoUrl: "https://github.com/EPraz/jerskits-marketplace",
    walkthroughUrl: "https://jerskits-marketplace.vercel.app/walkthrough",
    walkthroughLabel: "Watch showcase (0:35)",
    note: "Independent portfolio concept. Checkout is simulated; no real payments or deliveries.",
  },
  {
    id: "exploradores",
    status: "unpublished",
    title: "Exploradores del Rey",
    category: "Full-stack website & CMS",
    summary:
      "A website and admin workspace for managing content, events and images. Preview changes before publishing and review who changed what through the activity log.",
    stack: ["React", "Express", "PostgreSQL", "Better Auth"],
    cover: "./images/portfolio/exploradores-admin.webp",
    coverAlt:
      "Exploradores del Rey's admin panel in Petrol & Apricot, with homepage editing fields and a responsive preview using fictional content.",
    width: 1440,
    height: 760,
    repoUrl: "https://github.com/emr1195/ER-LandigPage/tree/develop",
    walkthroughUrl: "./walkthrough/exploradores-walkthrough.mp4",
    walkthroughLabel: "Watch walkthrough (ES)",
    note: "Client project. The walkthrough uses fictional content; the public demo is not available yet.",
  },
];
