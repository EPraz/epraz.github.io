# Local portfolio verification

Verified on 2026-10-17 on branch `feat/portfolio-entry-01`. The owner-review
adjustments follow `6bfad50`: retain the static diagram, remove optional3D,
extend the ambient background, add a desktop contact rail and replace the printed
email with a descriptive action. Hero content and the sketch remain intact.
The owner accepted the design and authorized publication to the existing GitHub
Pages repository on 2026-10-17. The publication refinement adds a portrait frame
and a compact NAVIGATE frontend showcase beneath the Keelwatch flagship. The
owner's follow-up restores the whole Profile panel and replaces NAVIGATE's image
preview action with a live website link.

## Run and check

From this checkout, with Node 20 or newer and dependencies installed:

```sh
npm run typecheck
npm run lint
npm run audit:conventions
npm run build
node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5177 --strictPort
```

Open http://127.0.0.1:5177/ . All four repository checks passed. No unit-test runner
or `npm test` suite is configured; browser verification is the agreed boundary.

## Browser verification

The local QA harness uses installed Chrome and Edge plus isolated Playwright and
axe tooling; it adds no dependencies to the application. Its scripts live in the
outer workspace at `.scratch/portfolio-reconstruction/`. Execute them from that
workspace, with this checkout's development server on 5176 and production preview
on 5177:

```sh
node .scratch/portfolio-reconstruction/verify-integrated.mjs .design/portfolio-polish
node .scratch/portfolio-reconstruction/verify-owner-polish.mjs http://127.0.0.1:5177/
node .scratch/portfolio-reconstruction/verify-contact-rail.mjs
node .scratch/portfolio-reconstruction/verify-sticky-header.mjs
node .scratch/portfolio-reconstruction/verify-work-slice.mjs http://127.0.0.1:5177/
node .scratch/portfolio-reconstruction/verify-professional-slice.mjs http://127.0.0.1:5177/
node .scratch/portfolio-reconstruction/verify-destinations.mjs
node .scratch/portfolio-reconstruction/prepare-polish-qa.mjs
node .scratch/portfolio-reconstruction/verify-polish-media.mjs
node .scratch/portfolio-reconstruction/verify-polish-contact.mjs
```

Results cover:

- Twelve complete Chrome/Edge journeys at 320, 375, 768, 1024, 1440 and 1366×640;
  native navigation, keyboard focus, one page title, no horizontal overflow,
  no page errors and zero detected axe WCAG A/AA violations.
- Keelwatch as the detailed flagship; its six destinations respond, and the
  walkthrough anchor exists. This does not certify the demo's write operations.
- Current employment, education and languages; downloaded CV bytes match the
  supplied PDF. The source document is preserved.
- Delayed/failed images, fonts and contact chunks retain the essential journey.
- Contact validation, pending state, duplicate prevention, rejection, retained
  draft, cooldown/retry, success/reset and missing-configuration email fallback.
  Provider responses are intercepted; no real messages are sent.
- The static Interface/API/Data diagram remains visible without a graphics
  control, canvas or renderer download. Earlier3D checks are historical.
- Fourteen Chrome/Edge rail layouts, including breakpoint and short-viewport
  boundaries: reserved space, correct destinations, keyboard focus, hoverable
  labels, Escape dismissal and mobile contact access.
- Twenty section destinations at mobile/tablet/desktop widths retain the sticky
  header and land below it. The inherited horizontal-overflow rule now uses
  clipping without creating a second scroll container that defeats stickiness.
- Descriptive email actions retain their mailto target in normal, loading,
  failed-chunk and unconfigured variants; the personal address is not printed.
  The normal form presents “Prefer your email app?” beside its submit action,
  including during retry cooldown, wrapping only when space is insufficient.

For the contact simulation, `verify-polish-contact.mjs` expects local QA
servers on 5178 (dummy EmailJS identifiers) and 5179 (no identifiers). Inspect its
request interception before running it. Start the isolated variants in separate
terminals with `node .scratch/portfolio-reconstruction/start-polish-qa.mjs configured`
and the same command with `unconfigured`. Do not use a live provider as a test.

## Review and observed limits

The previous Standards and Spec review reports remain alongside the historical
delivery evidence. The new review range starts at `6bfad50` and covers only the
owner's requested refinements. The optional renderer, its preference/visibility
hooks and its controls are removed; the static component has no scene state.

The production build now emits no AssemblyCanvas graphics chunk or large-chunk
advisory. Older scene sources outside this page remain archived and unmounted;
dependencies were not broadly migrated. The CSS background is static, and the
existing reduced-motion behavior is preserved. No field-performance claim is made.

The descriptive email action changes presentation, not secrecy: the real
destination remains in the mailto link. Browser destination previews are native
browser UI and are not overridden with script-based navigation.
Rail labels support Escape for both hover-only and keyboard-focus interaction;
their document listener is removed during cleanup.

Raw JSON, screenshots, performance conditions and the separate review reports
remain in the outer workspace's `.design/portfolio-polish/`; historical evidence
is preserved in `.design/portfolio-complete/`. The spec and
per-ticket history remain in `.scratch/portfolio-reconstruction/`. These local
artifacts and isolated QA tooling are not included by a clean clone. Preserve
them separately when transferring the local review workspace.

Accessibility automation is not a full accessibility certification. Simulated
contact success does not establish inbox delivery. Final editorial/visual
acceptance belongs to the owner.

## Publication refinement

The 2026-10-17 owner request authorizes updating the existing GitHub repository
and its configured Pages site at https://epraz.github.io/. The old repository
URL redirects to `EPraz/epraz.github.io`; `master` is the publication branch.
Pages uses the existing Actions workflow, and the three EmailJS variable names
are present in repository configuration. No configuration values are logged.

NAVIGATE remains a private repository. Its historical Pages URL returned HTTP
404, so the portfolio links to a local full-page screenshot instead of promising
a live demo or linking inaccessible source. The real screenshot is resized and
encoded as a 96 KB WebP. The copy describes responsive React UI, bilingual
content, legal pages and client-side validation; it makes no backend or message
delivery claim. No NAVIGATE source or repository visibility is changed.

The publication QA artifacts live under `.design/portfolio-publication/` in the
outer workspace. They cover the added preview link, image failure and retained
layout, portrait frame and short-screen fit, plus the integrated keyboard and
accessibility journeys. Public-site verification follows the Pages deployment;
external email inbox delivery remains untested.

## Owner corrections after publication

The requested hero frame is the original complete Profile panel, including its
caption, portrait and Based in / Focus / Working with rows. The portrait-only
border is removed. Earlier portrait dimensions and panel surface/shadow tokens
are restored; the current global background, navigation and other sections stay.
Twelve Chrome/Edge hero journeys and six fallback/reduced-motion checks pass.

The owner also rejects the image-only NAVIGATE action. The landing is published
at https://navigate-marine.vercel.app/ on Vercel; Visit website opens the actual
bilingual SPA. The thumbnail remains illustrative. Its source stays in a private
GitHub repository. The deploy uses a root base and SPA rewrites for legal routes,
while its normal build remains compatible with the previous GitHub Pages base.
The form explicitly confirms local validation without message delivery. A
compatible router lockfile patch clears production dependency audit findings;
existing developer-tool audit findings remain outside this hosting change.
Lint, 13 existing tests, production build and mobile/tablet/desktop browser
journeys verify the landing's language persistence, routes after refresh, images
and local-only form. No actual messages are sent.

Current correction evidence lives in the outer workspace's
`.design/profile-restoration/` and `.design/navigate-live/`. Earlier publication
notes above describe the superseded first candidate.

## Local Projects-section proposal

The owner's next request adds the newly hosted Project Management app and asks
for a cohesive Projects section. This work is local-only on
`feat/projects-section-local` and explicitly awaits visual approval before any
push or deployment. The public portfolio remains on the previous approved code.

The proposal adds a Projects heading, a framed Keelwatch flagship and two
supporting cards for Project Management and NAVIGATE. A native disclosure keeps
Keelwatch's detailed conflict example and recording/transcript links reachable.
Projects navigation and the hero's View projects action retain `#work`. Existing
hero styling, contact behavior and credentials are preserved.

Project Management's https://project-management-murex-pi.vercel.app/ access was
verified through Explore demo, the populated project list and taskboard; only
demo authentication and reading/navigation were performed. No application records
were created, moved or edited. The thumbnail is a real current overview capture,
taken after the progress and activity panels were visible. Its alternative text
describes that overview. The
card mentions fictional shared data and possible first-load wait. Its repository
is public. NAVIGATE continues linking its live Vercel site and private source is
not linked. No unrelated archived project is mounted.

Local types, lint, convention audit and production build pass. Browser checks
cover the three-project collection, native disclosure keyboard behavior, real
link targets, responsive columns/stacking, media-failure space reservation and
the complete page's keyboard/accessibility journey. Evidence and screenshots
are in the outer workspace's `.design/projects-section/`, with the scoped local
spec at `.scratch/projects-section/spec.md`. No real email is sent during QA.

The owner's next local refinement replaces the main Keelwatch warning image
with its real Fleet register in the live read-only demo. Demo Auditor session
and Fleet reads returned successfully; no operational data was changed. The
capture uses the app's actual dark palette and is encoded as a 52 KB WebP.
Explore demo is now primary; the case study and code remain secondary. The old
local conflict capture and its direct evidence link are inside the disclosure,
with a reserved image box and its own failure fallback. Supporting screenshots
have a small shared inset for owner comparison; app colors remain unchanged.
Skills and diagram prose are deliberately unchanged. Nine focused journeys,
including failed main/conflict images, pass after this refinement. These are
local design changes, not publication approval.

The owner accepted that refinement and requested a Project Management image
trial plus the deferred Skills text condensation. The PM card now shows its
real Launchpad taskboard, captured after both the toolbar and ticket headings
rendered; its filename and alternative text describe the board. No demo records
were changed. Skills retains its three capability headings, all technology groups
and the static diagram, with shorter descriptions and a concise diagram title.
Repeated introductory/diagram paragraphs and their unused text styles were
removed. Before/after responsive captures remain in `.design/projects-section/`.
Types, lint, build and nine focused browser journeys pass. Publication still
awaits owner approval.

The owner subsequently approved the complete current design and explicitly
authorized publication to the existing GitHub Pages site. The next Dashboard
card and four-project layout are future local work and are excluded from this
release. Use the existing Pages workflow and preserve its working contact
configuration. Public verification evidence is recorded locally after deployment.

## Published Projects and local Dashboard preparation

The accepted three-project design is published at `bf40721`. GitHub Pages run
39074098115 completed successfully. Three public journeys (375, 768 and 1280 px)
verify native keyboard navigation, Fleet/taskboard captures, concise Skills, exact
CV bytes, zero detected axe violations and no failed site resources/page errors.
The EmailJS configuration matches the current local public identifiers by a
read-only comparison of loaded JavaScript chunks. The form was not submitted.

The next local branch adds a text-only Dashboard placeholder and a responsive
three-card supporting grid. Dashboard is unfinished in `GIT/dashboard`; no
screenshots, description, technologies or links are inferred. Seven responsive
journeys, including the 1279/1280 breakpoint boundary, and four image-failure
journeys pass. Types, lint, strict convention audit and build pass. This fourth
project proposal stays local until separate approval. Evidence is in the outer
workspace at `.design/dashboard-placeholder/`.

The owner rejected the three-column design and chose a compact flagship followed
by horizontal supporting rows. The current local proposal is on
`feat/project-rows-local`: images/text sit alongside each other from 768 px and
stack below that, technology lists wrap as plain metadata and Dashboard is a
small independent status line. All project content and destinations are retained.
Types, lint, strict convention audit, build and eleven focused browser journeys
pass, including the 767/768 boundary and all media failures. Fresh section and
full-page responsive captures are in `.design/project-rows/`. The public release
remains `bf40721`; no new deployment was performed.

The owner then requested a conditional inspection of GIT/dashboard: populate
the upcoming row only if real information exists. Its current glossary, app
configuration and routed features identify Aster, a sales/marketing frontend
for a fictional audio store. Source implements the lead/purchase/inventory domain
with browser-local demo state. The old logistics README/deployment is not used.
There is enough evidence for a brief description and React Native Web/Expo/
TypeScript metadata. Aster now occupies an actual row with a clearly labelled
graphic placeholder and In development status, with no link or inactive CTA.
No dashboard files or operational data changed, and the unfinished app is not
certified as complete. Types/lint/convention audit/build and eleven focused
browser journeys pass. Evidence: `.design/aster-coming-soon/`. Local only.

## Approved compact Projects release — 2026-10-17

The owner accepted the Aster presentation and explicitly authorized publication
of the current design. Its description is shortened to: "A frontend workspace
for a fictional audio store, connecting leads, purchases and inventory."
The compact flagship, horizontal supporting rows and Aster placeholder/status
are included in this release. Aster has no public action or actual screenshot.
The existing GitHub Pages workflow and contact configuration are retained.
Post-deployment verification is recorded in the local publication evidence;
contact checks are read-only and do not submit the form.
