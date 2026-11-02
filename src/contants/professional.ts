export const employment = [
  {
    company: "Control Risks",
    role: "Software Engineer",
    period: "March 2023 — October 2026",
    summary: "Built enterprise due-diligence and screening workflows with React, C#/.NET, Node.js and Azure.",
    contributions: [
      { title: "Asynchronous APIs", detail: "Implemented asynchronous screening, reporting and matching workflows with result polling and event notifications; supported testing and production releases." },
      { title: "Data migration", detail: "Rebuilt endpoints and transformed SQL Server records for a migration from a monolith to microservices and Cosmos DB, preserving business rules and validating application flows." },
      { title: "Resumable video uploads", detail: "Built a React, C# and Azure Blob Storage workflow for videos up to 800 MB, with parallel chunks, retries and recovery after network interruptions." },
      { title: "Cross-product integration", detail: "Connected product registration through Azure Service Bus and a React terms-and-conditions flow, coordinating backend integration with another engineering team." },
      { title: "Quality & production support", detail: "Wrote xUnit and Jest tests, reaching 60% coverage in assigned modules; diagnosed webhook inconsistencies with QA, reviewed code and helped resolve technical blockers." },
    ],
  },
  {
    company: "Live And Invest Overseas",
    role: "Web Specialist",
    period: "September 2020 — October 2022",
    summary: "Responsive websites, performance investigation and day-to-day reliability.",
    contributions: [
      { title: "Responsive delivery", detail: "Built and maintained responsive WordPress sites and custom templates, contributing to a reported 23% reduction in bounce rate." },
      { title: "Performance & maintenance", detail: "Optimized JavaScript, CSS and site performance, improving page-load time by approximately 20%; maintained site security and access controls." },
    ],
  },
];

export const education = [
  { degree: "Master’s Degree in Software Engineering", institution: "Technological University of Panama", period: "2023–2025" },
  { degree: "Mechatronic Engineering", institution: "University of Panama", period: "2015–2021" },
];

export const languages = [
  { name: "Spanish", level: "Fluent" },
  { name: "Portuguese", level: "Fluent" },
  { name: "English", level: "Professional" },
];

export const capabilities = [
  { title: "Interfaces with care", detail: "React workflows with validation, preserved drafts and recoverable uploads." },
  { title: "APIs that hold together", detail: "Asynchronous services, data migrations and server-enforced permissions." },
  { title: "Follow the issue through", detail: "Trace failures across services and verify fixes with focused tests." },
];

export const technologyGroups = [
  { title: "Interfaces", tools: ["React", "TypeScript", "React Native", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { title: "APIs & services", tools: ["C#/.NET", "ASP.NET Core", "Node.js", "NestJS", "REST", "GraphQL"] },
  { title: "Data & cloud", tools: ["SQL Server", "PostgreSQL", "Azure Cosmos DB", "Microsoft Azure", "Service Bus", "Blob Storage"] },
  { title: "Quality & delivery", tools: ["xUnit", "Jest", "Git", "Azure DevOps", "OpenAPI"] },
];
