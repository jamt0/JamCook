import ReactDOM from "react-dom";
import App from "App";
import "assets/main.css";
import { AuthProvider } from "context/auth";
import { SettingsProvider } from "context/settingsUser";
import { UIProvider } from "context/UI";

ReactDOM.render(
  <AuthProvider>
    <SettingsProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </SettingsProvider>
  </AuthProvider>,
  document.getElementById("root")
);