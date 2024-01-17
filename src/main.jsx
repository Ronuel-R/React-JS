import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/main_page/main_page";
import "./index.css";
import LoginPage from "./pages/login/Login_page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/register/register_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
