import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Footer from "./footer/Footer";
import Root from "./Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // children: [
    //   {
    //     path: "/",
    //     element: <Footer></Footer>,
    //   },
    // ],
  },
  {
    path: "/Settings",
    element: <Footer></Footer>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
