import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { PaymentProvider } from "@/contexts/PaymentContext";

createRoot(document.getElementById("root")!).render(
  <PaymentProvider>
    <App />
  </PaymentProvider>
);
