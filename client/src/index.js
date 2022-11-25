import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import store from "./store";
import { Provider } from "react-redux";

import "./index.css";

import LoadingPage from "./components/SkeletonLoader/LoadingPage";
const App = React.lazy(() => import("./App"));

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </Provider>
);
