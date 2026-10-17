# Local portfolio verification

Verified on 2026-10-17 on branch `feat/portfolio-entry-01`. Application candidate:
`e203885771633a02f1020af4012b71ab8fc288f6`. The approved personal hero remains
the reference at `3d8f89b`. The integrated page awaits the owner's final review.

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
node .scratch/portfolio-reconstruction/verify-integrated.mjs
node .scratch/portfolio-reconstruction/verify-work-slice.mjs http://127.0.0.1:5177/
node .scratch/portfolio-reconstruction/verify-professional-slice.mjs http://127.0.0.1:5177/
node .scratch/portfolio-reconstruction/verify-destinations.mjs
node .scratch/portfolio-reconstruction/verify-media-recovery.mjs
node .scratch/portfolio-reconstruction/verify-assembly-resize.mjs
node .scratch/portfolio-reconstruction/verify-assembly-matrix.mjs
node .scratch/portfolio-reconstruction/verify-assembly-remount.mjs
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
- Optional 3D opt-in, constrained/reduced-motion/data-saving alternatives,
  delayed/failed module, absent WebGL, slow-frame fallback, context loss,
  visibility changes, offscreen disposal, bounded drawing and idle.
- Completed-assembly resizing at 1200, 1320 and 375px, retaining one canvas that
  fits its stage, and development StrictMode teardown/remount.

For the contact simulation, `verify-contact-integrated.mjs` expects local QA
servers on 5178 (dummy EmailJS identifiers) and 5179 (no identifiers). Inspect its
request interception before running it. Do not use a live provider as a test.

## Review and observed limits

Separate Standards and Spec reviews covered `3d8f89b...e203885`. The remaining
resize finding was corrected: renderer dimensions now follow the container, and
idle demand frames do not trigger the active-animation slowness detector.
Targeted re-reviews found no pending issues. No further structural simplification
was needed for this correction.

The deferred graphics dependency is about 167kB gzip. Vite still reports its
over-500kB raw chunk advisory. It loads only after opt-in; initial verification
observes no canvas, WebGL module, model or texture request. The measured assembly
draws for about 1.18 seconds, then idles; offscreen teardown releases its context,
buffers and program. These are local observations, not physical-device guarantees.

Local five-run measurements use ordinary motion, cold contexts, desktop CPU 1×
and mobile CPU 4× on loopback without network throttling. The paired static/final
comparison met the 150ms median initial-LCP regression budget. A final rerun is
retained separately; timing variation across sessions is not a speedup claim.
These measurements are neither field Core Web Vitals nor Lighthouse scores.

Raw JSON, screenshots, performance conditions and the separate review reports
remain in the outer workspace's `.design/portfolio-complete/`; the spec and
per-ticket history remain in `.scratch/portfolio-reconstruction/`. These local
artifacts and isolated QA tooling are not included by a clean clone. Preserve
them separately when transferring the local review workspace.

Accessibility automation is not a full accessibility certification. Simulated
contact success does not establish inbox delivery. Final editorial/visual
acceptance belongs to the owner; publication is a separate decision.
