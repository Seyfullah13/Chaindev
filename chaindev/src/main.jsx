import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./Components/layouts/router.jsx";
import "./styles/index.css";
import App from "./App.jsx";
import"./I18n/I18n.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
