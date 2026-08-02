import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "./components/errors/ErrorBoundary";
import { AppErrorFallback } from "./components/errors/ErrorFallbacks";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("The application root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary
      fallback={(fallbackProps) => <AppErrorFallback {...fallbackProps} />}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
