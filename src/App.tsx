// src/App.tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red", fontFamily: "sans-serif" }}>
          <h2>Something went wrong rendering the page:</h2>
          <pre style={{ background: "#f8d7da", border: "1px solid #f5c6cb", padding: "15px", borderRadius: "5px", overflow: "auto" }}>
            {this.state.error?.toString()}
          </pre>
          <pre style={{ background: "#eee", padding: "15px", borderRadius: "5px", overflow: "auto", fontSize: "12px", marginTop: "10px" }}>
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
