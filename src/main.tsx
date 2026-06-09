import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Evita que um service worker permaneça ativo quando o app é aberto dentro de um iframe.
const isInIframe = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

if (isInIframe) {
  navigator.serviceWorker?.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => registration.unregister());
  });
}

createRoot(document.getElementById("root")!).render(<App />);
