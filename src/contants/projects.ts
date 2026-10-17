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
  repoUrl?: string;
  demoUrl?: string; // Loom/YouTube
  caseStudyUrl?: string; // Notion/README
  status: Status;
  layout?: "featured" | "compact";
};
export type Status = "live" | "demo-offline" | "coming-soon";

export const projects: Project[] = [
  {
    title: "Project Management App",
    subtitle: "Role-based planning and delivery platform",
    cover: "./images/projectManagementCapture2.png",
    bg: "#0f172a",
    role: "Full-Stack Engineer",
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
      "Full-stack project management platform with role-based access, sprint planning, hierarchical work items, a drag-and-drop taskboard, real-time updates, and progress analytics. A NestJS and Prisma API supports the React interface and PostgreSQL data model.",
    repoUrl: "https://github.com/EPraz/projectManagement",
    status: "demo-offline",
    layout: "featured",
  },
  {
    title: "Logistics Dashboard",
    subtitle: "Cross-platform operational monitoring",
    cover: "./images/captura_dashboard.png",
    bg: "#0f172a",
    role: "Frontend Engineer",
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
      "React Native and Expo dashboard for operational monitoring across web, tablet, and mobile. It combines tables, charts, multi-page navigation, settings, and light/dark themes in a frontend-only demonstration.",
    liveUrl: "https://dashboard-one-rose-14.vercel.app/dashboard/",
    repoUrl: "https://github.com/EPraz/dashboard",
    status: "live",
    layout: "featured",
  },
  {
    title: "Navigate",
    subtitle: "Multilingual routing and validated workflows",
    cover: "./images/navigate_capture.png",
    bg: "#00162ecc",
    role: "Frontend Engineer",
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
      "Single-page React application with client-side routing, multilingual content, and validated forms. Its reusable UI layer is covered by Vitest and Testing Library.",
    repoUrl: undefined,
    status: "demo-offline",
    layout: "featured",
  },
  {
    title: "Restaurant Landing Page",
    subtitle: "Responsive restaurant marketing site",
    cover: "./images/restaurant-website-capture.png",
    bg: "#ddeeff",
    role: "Frontend Developer",
    stack: ["React", "Create React App"],
    summary:
      "Responsive restaurant landing page with menu content, image-led sections, and a dedicated not-found experience.",
    liveUrl: "https://epraz.github.io/restaurant-website/",
    repoUrl: "https://github.com/EPraz/restaurant-website",
    status: "live",
    layout: "featured",
  },
  {
    title: "Camera Viewer App",
    subtitle: "Multi-camera monitoring prototype",
    cover: "./images/CameraUIMVPdesktopCapture.png",
    bg: "#ddeeff",
    role: "Mobile UI Developer",
    stack: ["React Native", "Expo", "TypeScript"],
    summary:
      "React Native prototype for selecting a monitored location, reviewing its camera feeds, and focusing on an individual stream. Real-time video integration remains outside the prototype scope.",
    repoUrl: "https://github.com/EPraz/camera-ui-mvp",
    status: "live",
    liveUrl: "https://camera-ui-mvp.vercel.app/",
  },

  // {
  //   title: "Multi-Tenant E-commerce Admin",
  //   subtitle: "Vendor dashboard & management tools",
  //   cover: "./images/elementor-placeholder-image.png",
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
  //   cover: "./images/elementor-placeholder-image.png",
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
  //   cover: "./images/elementor-placeholder-image.png",
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
  //   cover: "./images/elementor-placeholder-image.png",
  //   bg: "#e9f7ef",
  //   role: "Full Stack Developer",
  //   stack: ["React Native", "Expo", "NestJS", "PostgreSQL", "TypeScript"],
  //   summary:
  //     "Platform for managing organizations and their members in one place. Includes data management, role assignments, and integration with related entities. Built for scalability and easy feature expansion.",
  //   repoUrl: "https://github.com/EPraz/admin-hub-rn",
  //   status: "coming-soon",
  // },
];
