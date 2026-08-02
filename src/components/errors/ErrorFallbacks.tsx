import type { ErrorFallbackProps } from "./ErrorBoundary";

export const AppErrorFallback = ({
  resetErrorBoundary,
}: ErrorFallbackProps) => (
  <main className="min-h-dvh flex-center padding-x" role="alert">
    <div className="card-border max-w-lg rounded-xl p-8 text-center">
      <h1 className="text-2xl font-semibold">The portfolio could not load</h1>
      <p className="mt-3 text-white-50">
        A rendering error interrupted the page. Try loading the experience
        again.
      </p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="mt-6 rounded-lg border border-white/20 px-4 py-2 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Try again
      </button>
    </div>
  </main>
);

type SceneErrorFallbackProps = ErrorFallbackProps & {
  label: string;
};

export const SceneErrorFallback = ({
  label,
  resetErrorBoundary,
}: SceneErrorFallbackProps) => (
  <div
    className="flex-center h-full min-h-64 rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
    role="status"
  >
    <div>
      <p className="text-white-50">{label} is unavailable.</p>
      <button
        type="button"
        onClick={resetErrorBoundary}
        className="mt-3 text-sm text-indigo-300 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Retry visual
      </button>
    </div>
  </div>
);
