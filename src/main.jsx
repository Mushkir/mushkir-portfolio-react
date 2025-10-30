import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TheGuestLayout from "./layouts/TheGuest.jsx";
import HomePage from "./pages/HomePage.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import TheAcademicProjectsPage from "./pages/AcademicProjectsPage.jsx";
import Titum from "./pages/Titum.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TheGuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/academic-projects",
        element: <TheAcademicProjectsPage />,
      },
      {
        path: "/tasks",
        element: <TaskPage />,
      },
      {
        path: "/titum",
        element: <Titum />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
