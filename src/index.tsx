import { defineCustomElements } from "@ionic/pwa-elements/loader";
import ReactDOM from "react-dom";
import App from "./App";
import "assets/main.css";
import { AuthProvider } from "auth";
import { SettingsProvider } from "context/settingsUser";

defineCustomElements(window);

ReactDOM.render(
  <AuthProvider>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </AuthProvider>,
  document.getElementById("root")
);