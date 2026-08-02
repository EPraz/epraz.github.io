import {
  Component,
  type ErrorInfo,
  type ReactNode,
} from "react";

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode | ((props: ErrorFallbackProps) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

type ErrorBoundaryState = {
  error: Error | null;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
      return;
    }

    console.error("Unhandled render error", error, errorInfo.componentStack);
  }

  private resetErrorBoundary = () => {
    this.setState({ error: null });
  };

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (!error) {
      return children;
    }

    if (typeof fallback === "function") {
      return fallback({
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      });
    }

    return fallback;
  }
}
