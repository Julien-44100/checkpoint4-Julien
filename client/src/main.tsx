// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./components/router/router";

/* ************************************************************************* */

// Import the main app component

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error(
    "The root element with id 'root' was not found in the document.",
  );
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
