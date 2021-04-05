import { defineCustomElements } from '@ionic/pwa-elements/loader';
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import { AuthProvider } from "auth";

defineCustomElements(window);

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);