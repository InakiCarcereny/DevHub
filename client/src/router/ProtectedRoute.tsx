import type { JSX } from "react";
import { Navigate } from "react-router-dom";
// import { useAuthStore } from "@/store/auth-store";

export default function ProtectedRoute({ children }: { children: React.ReactNode }): JSX.Element {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
