import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom"; // Add this import

createRoot(document.getElementById("root")!).render(
  <HashRouter basename="/PhantomPawn">
    <App />
  </HashRouter>
);
