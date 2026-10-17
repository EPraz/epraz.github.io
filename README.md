# Edwin Pile — Software Engineer Portfolio

A single-page portfolio built with React 19, TypeScript, Vite 7 and Tailwind CSS 4.
Public content is in English. The site is published at https://epraz.github.io/
through the repository's GitHub Pages workflow.

This branch contains a local Projects-section design proposal. It awaits owner
approval; do not push or deploy the proposed layout before that approval.

## Run locally

Use Node 20 or newer:

```sh
npm install
npm run dev
```

For the production build:

```sh
npm run typecheck
npm run lint
npm run audit:conventions
npm run build
npm run preview
```

There is no configured unit-test runner. The reconstruction is verified through
browser journeys, accessibility checks, failure simulations and performance
observations, recorded in the local reconstruction workspace.

## Page and content

- **Home:** personal introduction, Profile panel with pencil sketch and native section links.
- **Projects:** Keelwatch is the flagship. Its live Fleet capture,
  case study, demo, code, walkthrough, transcript and Maintenance captures expose
  the evidence and its synthetic-data/shared-account context. Its deeper
  explanation and local conflict capture are available in a native disclosure.
  Explore demo is its primary action. Project Management
  and NAVIGATE form a pair of supporting project cards with live destinations.
  Project Management uses a current cloud-demo taskboard capture and links its
  public source; NAVIGATE opens https://navigate-marine.vercel.app/ and keeps its
  source private. The Projects navigation label and View projects action retain
  the existing `#work` anchor.
- **Experience:** two employment entries, education and languages aligned with
  the supplied CV. The downloadable PDF is an unchanged copy of that source.
- **Skills:** evidence-backed capabilities and categorized tool chips. A static
  connected-system diagram illustrates interface, API and data responsibilities.
- **About:** development, debugging, careful frontend work, reading and exercise.
- **Contact:** a descriptive email action, LinkedIn and GitHub, plus an EmailJS form with field
  validation, pending feedback, duplicate prevention and recoverable errors.

Typed content lives in `src/contants/keelwatch.ts`, `selectedProjects.ts`, `navigate.ts`, `professional.ts` and
`contact.ts`. The existing `contants` spelling is intentional. `src/App.tsx`
composes the sections. Shared CSS tokens live in `src/styles/tokens.css`, with
section primitives in `src/styles/sections.css` and section-owned styles nearby.
Older project/scene sources remain outside the mounted page; they are not
presented as completed work.

## Visual system

The ink-blue/copper background and dot texture continue through the page, with
quieter texture behind reading sections. A fixed right-side contact rail appears
on wide desktop with reserved layout space. Smaller screens retain the contact
and footer links. Icons have accessible names, focus indicators and hover/focus
labels that can be dismissed with Escape.

The owner selected the static system diagram over the optional assembly. The
page has no 3D controls or WebGL dependency downloads. Earlier scene code remains
in Git history. Beside Send message, “Prefer your email app?” offers a secondary
email action without printing the address. Loading and recovery views retain
direct email access; the real mailto destination and native behavior remain.

## Contact configuration

Set these public EmailJS identifiers in a local Vite environment file:

```text
VITE_APP_EMAILJS_SERVICE_ID
VITE_APP_EMAILJS_TEMPLATE_ID
VITE_APP_EMAILJS_PUBLIC_KEY
```

Do not commit environment files. Without configuration the form explains its
availability and direct contact remains usable. Validation is local; send errors
retain the draft, and the form provides persistent feedback and a retry cooldown.
Browser QA intercepts the EmailJS request and simulates success/failure; it does
not send messages or certify the external mailbox delivery service.

## Sources and local delivery

Keelwatch evidence: [case study](https://github.com/EPraz/keelwatch/blob/master/docs/flagship/CASE_STUDY.md),
[demo](https://keelwatch-chi.vercel.app/sign-in),
[repository and recording](https://github.com/EPraz/keelwatch).

Contact: [email](mailto:epilepra@gmail.com),
[LinkedIn](https://www.linkedin.com/in/edwin-pile-583652234/),
[GitHub](https://github.com/EPraz).

The reconstruction spec, tickets and owner approvals remain Local Markdown under
`.scratch/portfolio-reconstruction/`. Visual and QA artifacts are under `.design/`.
These are local working artifacts, not new remote issues. The
historical strategy documents in `docs/` describe earlier planning and do not
override the current local specification and approved hero.

See [verification and limitations](docs/portfolio-verification.md) for the
checks and reproduction commands. Pushes to `master` or `main` run
`.github/workflows/pages.yml`. The `github-pages` environment supplies the three
public EmailJS identifiers listed above; never commit local environment files.
