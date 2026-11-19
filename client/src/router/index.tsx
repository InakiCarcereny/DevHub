import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Bookmarks from "@/pages/Bookmarks";
import Explore from "@/pages/Explore";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import TagPage from "@/pages/TagPage";
import UserProfile from "@/pages/UserProfile";
import ProtectedRoute from "@/router/ProtectedRoute";

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/explore", element: <Explore /> },
      { path: "/bookmarks", element: <Bookmarks /> },
      { path: "/profile", element: <Profile /> },
      { path: "/users/:handle", element: <UserProfile /> },
      { path: "/tags/:tag", element: <TagPage /> },
    ],
  },
]);
