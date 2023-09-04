import { createRoot } from "react-dom/client";
import App from "./App";
import AuthProvider from "./contexts/auth";

const root = createRoot(document.querySelector("#root"));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
