// constants/projects.ts
export type Project = {
  title: string;
  subtitle?: string;
  cover: string;
  bg?: string;
  role: string;
  stack: string[];
  summary: string;
  liveUrl?: string;
  repoUrl: string;
  demoUrl?: string; // Loom/YouTube
  caseStudyUrl?: string; // Notion/README
  status?: Status;
  layout?: "featured" | "compact";
};
export type Status = "live" | "coming-soon" | undefined;

export const projects: Project[] = [
  {
    title: "Logistics Dashboard",
    subtitle: "Cross-platform operations dashboard",
    cover: "/images/captura_dashboard.png",
    bg: "#0f172a",
    role: "Frontend Developer",
    stack: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "Victory Native",
      "React Native Web",
    ],
    summary:
      "Frontend logistics dashboard built with React Native and Expo, focused on data visualization and operational monitoring. Includes tables, charts, multi-page navigation, a settings section, and light/dark theming. Designed as a cross-platform UI (web, tablet, mobile) without backend dependency.",
    liveUrl: "https://dashboard-one-rose-14.vercel.app/dashboard/",
    repoUrl: "https://github.com/EPraz/dashboard",
    status: "live",
    layout: "featured",
  },
  {
    title: "Project Management App",
    subtitle: "Sprints, roles, taskboard, charts",
    cover: "/images/projectManagementCapture2.png",
    bg: "#0f172a",
    role: "Full Stack Developer",
    stack: [
      "React",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Supabase Auth",
      "WebSockets",
      "Docker",
      "Charts.js",
    ],
    summary:
      "Full-stack project management platform inspired by Azure DevOps. Features role-based access control, sprint planning, epics, features and tickets with a drag-and-drop taskboard, real-time updates, and progress analytics. Built with a NestJS + Prisma backend and a React frontend, deployed as a single production app with PostgreSQL.",
    liveUrl: "https://projectmanagement.fly.dev/",
    repoUrl: "https://github.com/EPraz/projectManagement",
    status: "live",
    layout: "featured",
  },
  {
    title: "Navigate",
    subtitle: "i18n routing + validated forms (SPA)",
    cover: "/images/navigate_capture.png",
    bg: "#00162ecc",
    role: "Frontend Developer",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Material Tailwind",
      "i18next",
      "react-i18next",
      "React Hook Form",
      "Yup",
      "Vitest",
      "Testing Library",
    ],
    summary:
      "Single-page React app built with Vite featuring client-side routing, multilingual UI (i18next), and robust form handling with React Hook Form + Yup validation. Includes a reusable UI layer (Material Tailwind) and automated tests with Vitest + Testing Library.",
    liveUrl: "https://epraz.github.io/navigate/",
    repoUrl: undefined,
    status: "live",
    layout: "featured",
  },
  {
    title: "Restaurant Landing Page",
    subtitle: "Landing Page Restaurant",
    cover: "/images/restaurant-website-capture.png",
    bg: "#ddeeff",
    role: "Full Stack Developer",
    stack: ["React Create App"],
    summary:
      "A simple landing page for a restaurant, with some detailled pictures, menu, and a not found page implemented.",
    liveUrl: "https://epraz.github.io/restaurant-website/",
    repoUrl: "https://github.com/EPraz/restaurant-website",
    status: "live",
    layout: "featured",
  },
  {
    title: "Camera Viewer App",
    subtitle: "Prototype UI for multi-camera monitoring",
    cover: "/images/CameraUIMVPdesktopCapture.png",
    bg: "#ddeeff",
    role: "Mobile UI Developer",
    stack: ["React Native", "Expo", "TypeScript"],
    summary:
      "Prototype app to visualize multiple camera feeds in one place. Users can select a device (e.g., boat or location) and view its associated cameras, with the ability to focus on a specific stream. Designed to integrate real-time video in future iterations.",
    repoUrl: "https://github.com/EPraz/camera-ui-mvp",
    status: "live",
    liveUrl: "https://camera-ui-mvp.vercel.app/",
  },

  // {
  //   title: "Multi-Tenant E-commerce Admin",
  //   subtitle: "Vendor dashboard & management tools",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#f0f4ff",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL"],
  //   summary:
  //     "Admin dashboard for multi-tenant e-commerce. Vendors can manage products, orders, customers, staff, and track sales analytics. Scalable architecture to support multiple storefronts per vendor.",
  //   repoUrl: "https://github.com/EPraz/ecom-frontend-native",
  //   status: "coming-soon",
  // },

  // {
  //   title: "Services Marketplace",
  //   subtitle: "Connect clients with service providers",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#ffefdb",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
  //   summary:
  //     "MVP platform to connect clients and providers. Includes service listings, provider profiles, search with filters, and direct contact. Architecture prepared for future features like payments and geolocation.",
  //   repoUrl: "https://github.com/EPraz/marketplace-rn",
  //   status: "coming-soon",
  // },
  // {
  //   title: "Offline Orders System",
  //   subtitle: "POS-style offline-first ordering",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#ffe7eb",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "AsyncStorage"],
  //   summary:
  //     "Ordering system designed for low-connectivity environments. Allows capturing orders with photos and notes, storing them offline, and automatically syncing when internet is available. Ideal for field operations.",
  //   repoUrl: "https://github.com/EPraz/offline-uploader-mvp",
  //   status: "coming-soon",
  // },

  // {
  //   title: "Organization Admin Hub",
  //   subtitle: "Centralized management for organizations",
  //   cover: "/images/elementor-placeholder-image.png",
  //   bg: "#e9f7ef",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
  //   summary:
  //     "Platform for managing organizations and their members in one place. Includes data management, role assignments, and integration with related entities. Built for scalability and easy feature expansion.",
  //   repoUrl: "https://github.com/EPraz/admin-hub-rn",
  //   status: "coming-soon",
  // },
];
