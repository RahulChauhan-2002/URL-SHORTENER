import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store/store.js";
import {Provider} from 'react-redux'

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from './routing/routeTree.js'; 

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </StrictMode>
);
