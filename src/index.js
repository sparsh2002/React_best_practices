import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {ROUTE_LIST} from './index.utils'
import { Provider } from 'react-redux'
import store from './app/store'
import './index.css'
const router = createBrowserRouter(ROUTE_LIST);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);