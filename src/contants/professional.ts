export const employment = [
  {
    company: "Control Risks",
    role: "Software Engineer",
    period: "March 2023 — Present",
    summary: "Full-stack delivery, distributed workflows and production problem-solving.",
    contributions: [
      { title: "Asynchronous APIs", detail: "Developed an API product from implementation through production, replacing synchronous operations with queues, workers, notifications and polling." },
      { title: "Data migration", detail: "Contributed to a SQL Server to Azure Cosmos DB migration: endpoint changes, data mapping, schema adaptation, validation and end-to-end testing." },
      { title: "Resumable uploads", detail: "Implemented a React, C# and Azure Blob Storage workflow with chunked uploads, retries, duplicate protection, recovery and incomplete-upload cleanup." },
      { title: "Incident diagnosis", detail: "Reproduced production issues across APIs and event-driven services, traced the data flow, tested hypotheses and validated targeted fixes." },
      { title: "Quality & collaboration", detail: "Wrote xUnit and Jest unit/integration tests, reviewed code, paired with teammates and helped resolve blockers in unfamiliar codebases." },
    ],
  },
  {
    company: "Live And Invest Overseas",
    role: "Web Specialist",
    period: "September 2020 — October 2022",
    summary: "Responsive websites, performance investigation and day-to-day reliability.",
    contributions: [
      { title: "Responsive delivery", detail: "Developed and maintained WordPress sites with custom page templates and careful frontend implementation." },
      { title: "Performance & maintenance", detail: "Audited page performance, optimized CSS and JavaScript, and maintained plugin, access-control and website-security practices." },
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
  { title: "Interfaces with care", detail: "React workflows that turn a design into usable software, including draft preservation, validation and recoverable uploads." },
  { title: "APIs that hold together", detail: "Asynchronous processing, data modeling and migration, with permissions and change history enforced beyond the interface." },
  { title: "Follow the issue through", detail: "Trace behavior across services, reproduce the failure, test a hypothesis and validate the fix with focused automated checks." },
];

export const technologyGroups = [
  { title: "Interfaces", tools: ["React", "TypeScript", "React Native", "JavaScript", "HTML & CSS", "Tailwind CSS"] },
  { title: "APIs & services", tools: ["C#/.NET", "ASP.NET Core", "Node.js", "NestJS", "REST", "GraphQL"] },
  { title: "Data & cloud", tools: ["SQL Server", "PostgreSQL", "Azure Cosmos DB", "Microsoft Azure", "Service Bus", "Blob Storage"] },
  { title: "Quality & delivery", tools: ["xUnit", "Jest", "Git", "Azure DevOps", "OpenAPI"] },
];
