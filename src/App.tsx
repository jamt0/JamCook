import React, { useEffect } from "react";
import { Home } from "containers";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useAuth } from "context/auth";
import { Loading } from "JamUI";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "theme/variables.css";

const App: React.FC = () => {
  const { auth, initialize } = useAuth()!;
  console.log(auth);

  useEffect(() => {
    !auth.initialized && (async () => await initialize())();
  }, [auth, initialize]);

  if (!auth || !auth.initialized) {
    return (
      <IonApp>
        <Loading isOpen={true} />
      </IonApp>
    );
  } else {
    return (
      <IonApp>
        <IonReactRouter>
          <Home />
        </IonReactRouter>
      </IonApp>
    );
  }
};

export default App;
