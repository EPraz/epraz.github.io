// types
export interface ExpCardsProps {
  review: string;
  imgPath: string;
  logoPath: string;
  title: string; // Rol — Empresa
  date: string; // Ej: Mar 2023 – Present
  responsibilities: string[];
}

// data
export const expCards: ExpCardsProps[] = [
  {
    review:
      "Technical ownership across .NET APIs and microservices — improved modularity, quality, and on-time delivery.",
    imgPath: "./images/logos/controlrisks.png",
    logoPath: "./images/logos/controlrisks.png",
    title: "Software Engineer — Control Risks",
    date: "Mar 2023 – Present",
    responsibilities: [
      "Developed and maintained RESTful APIs and microservices using ASP.NET Core and Node.js, improving system modularity and maintainability.",
      "Conducted regular code reviews, paired programming sessions, and technical workshops to improve code quality.",
      "Wrote and executed unit tests with xUnit and Jest to validate key business logic, achieving 60% coverage in assigned modules.",
      "Contributed to 5 cross-functional projects, applying React, C#, SQL Server, and CosmosDB to deliver scalable and efficient solutions.",
      "Led Scrum ceremonies and acted as Team Lead during manager absences (daily stand-ups, sprint planning, retrospectives), enforcing best practices and continuous integration to ensure timely delivery.",
      "Developed and maintained comprehensive technical documentation, including design specifications, API contracts (OpenAPI/Swagger), and root cause analysis reports for production incidents.",
      "Played a key role in improving functionality, debugging critical issues, and optimizing application performance across multiple initiatives.",
      "Collaborated with diverse teams to ensure seamless project delivery within tight deadlines.",
    ],
  },
  {
    review:
      "Faster, more stable sites through performance audits, optimizations, and security best practices.",
    imgPath: "./images/logos/lios.jpg",
    logoPath: "./images/logos/lios.jpg",
    title: "Web Specialist — Live And Invest Overseas",
    date: "Sep 2020 – Oct 2022",
    responsibilities: [
      "Developed and maintained responsive WordPress sites with custom page templates, reducing bounce rates by 23% and improving user engagement.",
      "Conducted performance audits and applied CSS and JavaScript optimizations to achieve 20% faster page load times.",
      "Ensured website security and compliance by applying best practices in plugin management, access control, and regular vulnerability assessments.",
    ],
  },
  {
    review:
      "Full-stack projects for continuous learning and portfolio work, modeled after enterprise standards.",
    imgPath: "./images/logos/self-taugh.jpg",
    logoPath: "./images/logos/self-taugh.jpg",
    title: "Self-Taught Web Developer — Personal Projects",
    date: "Apr 2020 – Present",
    responsibilities: [
      "Designed and built full-stack applications using React, React Native, and Node.js to deepen practical experience with modern product development.",
      "Applied design patterns, automated testing, and CI/CD practices to personal projects with documented engineering constraints.",
    ],
  },
];
