# Local portfolio verification

Verified on 2026-10-17 on branch `feat/portfolio-entry-01`. The owner-review
adjustments follow `6bfad50`: retain the static diagram, remove optional3D,
extend the ambient background, add a desktop contact rail and replace the printed
email with a descriptive action. Hero content and the sketch remain intact.
The integrated page awaits the owner's final visual/editorial review.

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
- Keelwatch as the only featured project; its six destinations respond, and the
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

“Send an email” changes how the address is presented, not its secrecy: the real
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
acceptance belongs to the owner; publication is a separate decision.
