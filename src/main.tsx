import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";
import "./index.css";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
