import "./index.scss";
import { createStore, FeretProvider } from "feret";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app/app";


const store = createStore();
store.orderedInvoke("created").then(() => {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <FeretProvider store={store}>
        <App />
      </FeretProvider>
    </React.StrictMode>
  );
});
require("./serviceWorker").register();
