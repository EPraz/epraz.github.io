# Edwin Pile — Software Engineer Portfolio

I build reliable operational software—from clear interfaces and APIs to data
models, authorization, and production delivery. My primary tools include
**React, React Native, TypeScript, NestJS, C#/.NET, and PostgreSQL**.

**Live:** _coming soon_

**Contact:** epilepra@gmail.com · [LinkedIn](https://www.linkedin.com/in/edwin-pile-583652234/) · [GitHub](https://github.com/EPraz)

---

## Portfolio Strategy

The next portfolio iteration is guided by:

- [`docs/portfolio-strategy.md`](docs/portfolio-strategy.md) — positioning,
  flagship scope, evidence standards, and engineering guardrails.
- [`docs/maritime-operations-roadmap.md`](docs/maritime-operations-roadmap.md) —
  phased, verifiable execution checklist.

---

## Highlights

- **Web & Mobile:** React + React Native apps with real-world UX, performance, and reliability goals.
- **APIs & Cloud:** REST/GraphQL, SQL Server/NoSQL, Azure (Functions, Web Apps), CI/CD.
- **Quality:** xUnit/Jest, integration tests, code reviews, and documentation.
- **Performance by design:** GPU-conscious animations (GSAP), adaptive WebGL (R3F), responsive grids, lazy assets.

---

## Tech Stack

**Frontend:** React, React Native (Expo), TypeScript, Tailwind/MUI  
**Backend:** .NET (C#), Node.js/NestJS, REST/GraphQL  
**Data:** PostgreSQL, SQL Server, NoSQL  
**Cloud/DevOps:** Azure (Functions, Web Apps, API Management), CI/CD, Git Flow  
**Testing:** xUnit, Jest  
**Viz:** Charts.js/Recharts (as needed)

---

## Projects (Selection)

- **Keelwatch — featured project:** an independent maritime operations workspace
  connecting Fleet, Compliance, Crew, Maintenance and Activity. My contribution
  spans React workflows, NestJS APIs, PostgreSQL rules, permissions and history.
  [Case study](https://github.com/EPraz/keelwatch/blob/master/docs/flagship/CASE_STUDY.md) ·
  [Demo](https://keelwatch-chi.vercel.app/sign-in) ·
  [Code and recordings](https://github.com/EPraz/keelwatch) ·
  [Integration verification](docs/keelwatch-integration.md)

> Keelwatch leads Work as a featured card. Other projects retain the existing
> grid with status badges and CTAs; typed constants supply the project content.

- **Project Management App** — Full-stack agile platform (Azure DevOps–inspired)
  Stack: React · NestJS · Prisma · PostgreSQL · Supabase Auth · WebSockets · Docker · Charts.js
  _Status: Demo offline_ · [Repo](https://github.com/EPraz/projectManagement)

- **Logistics Dashboard** — Cross-platform operations dashboard  
  Stack: React Native · Expo · Expo Router · TypeScript · NativeWind · Victory Native · React Native Web  
  _Status: Live_ · [Repo](https://github.com/EPraz/dashboard) · [Live](https://dashboard-one-rose-14.vercel.app/dashboard/)

- **Navigate** — i18n routing & validated forms (SPA)  
  Stack: React · TypeScript · Vite · React Router · Tailwind CSS · Material Tailwind · i18next · React Hook Form · Yup · Vitest  
  _Status: Demo offline_

- **Restaurant Landing Page** — Responsive marketing site  
  Stack: React (Create React App)  
  _Status: Live_ · [Repo](https://github.com/EPraz/restaurant-website) · [Live](https://epraz.github.io/restaurant-website/)

- **Camera Viewer App (RN)** — Multi-camera monitoring UI prototype  
  Stack: React Native · Expo · TypeScript  
  _Status: Live (Prototype)_ · [Repo](https://github.com/EPraz/camera-ui-mvp) · [Live](https://camera-ui-mvp.vercel.app/)

<!-- - **Project Management App** — Full-stack agile platform (Azure DevOps–inspired)
  Stack: React · NestJS · Prisma · PostgreSQL · Supabase Auth
  _Status: Live_ · [Repo](https://github.com/EPraz/projectManagement) · [Live](https://projectmanagement.fly.dev)

- **Multi-Tenant E-commerce Admin (RN)** — Vendor dashboards & analytics
  Stack: React Native · Expo · NestJS · PostgreSQL · Stripe API
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/ecommerce-admin-rn)

- **CCTV Viewer App (RN)** — Multi-camera UI prototype
  Stack: React Native · Expo · TypeScript
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/cctv-viewer-rn)

- **Services Marketplace (RN)** — Clients ↔ Providers MVP
  Stack: React Native · Expo · NestJS · PostgreSQL
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/marketplace-rn)

- **Offline Orders System (RN)** — POS-style, offline-first
  Stack: React Native · Expo · NestJS · PostgreSQL · AsyncStorage
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/offline-orders-rn)

- **Organization Admin Hub (RN)** — Centralized org management
  Stack: React Native · Expo · NestJS · PostgreSQL
  _Status: Coming soon_ · [Repo](https://github.com/EPraz/admin-hub-rn) -->

---

## Architecture &

This portfolio is built as a production-style application, not a static showcase. The focus is maintainability, performance, and real-world constraints.

- **Content-driven UI:** Cards/sections render from typed constants for easy updates.  
  Update these to maintain the site without touching components:
  - `contants/projects.ts` — project cards (title, stack, links, status)
  - `contants/keelwatch.ts` — featured Keelwatch summary, evidence and links
  - `contants/index.ts` — `heroWords`, `abilities`, `techStackImgs`, `counterItems`, `socialImgs`, `expCards`

- **Uniform project grid:** Same-sized cards, fixed media aspect ratio, clamped text, consistent CTAs (Live/Repo/Demo).

- **Animations (GSAP):** Batched `ScrollTrigger` for minimal observers; respects `prefers-reduced-motion`; one-time entrance animations.

- **Static entry:** the introduction and navigation work independently of WebGL.
  Edwin's name, engineering role and first-person profile accompany a smiling
  illustrated portrait and actual profile facts. Responsive WebP sources reserve
  space and fall back to initials if unavailable. Ambient depth is CSS; the
  entrance respects reduced motion. Fonts are served locally. The connected-piece
  concept is retained in local history for reuse. Stars and the contact globe
  remain unmounted while the role of a future 3D piece is reviewed.

- **Accessibility & UX:** Keyboard-focusable cards/links, alt text for icons/logos, consistent hit targets, high-contrast badges.

---

## Performance & Accessibility Notes

- **Images:** `object-cover`, lazy loading, consistent aspect ratios.
- **Animations:** transform/opacity only; batching to avoid layout thrash.
- **WebGL:** no canvas or WebGL runtime is needed for the current static entry.
  The future animated piece must preserve that usable fallback and be measured
  against the static baseline.
<!-- - **Targets:** Lighthouse ≥ 90 across PWA/Perf/Best Practices/SEO on mobile. -->

---

## Thank you

<!-- ## Getting Started

**Prerequisites:** Node 18+ and pnpm/yarn/npm.

```bash
# install
npm install

# run dev
npm dev

# build
npm build

# preview
npm preview

# lint (if configured)
npm lint
``` -->
