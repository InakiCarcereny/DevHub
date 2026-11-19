import type { JSX } from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      sidebar
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
