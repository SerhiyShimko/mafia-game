import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./styles/reset.scss";
import "./styles/variables.scss";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Provider store={}> */}
      <HashRouter>
        <App />
      </HashRouter>
    {/* </Provider> */}
  </StrictMode>
);
