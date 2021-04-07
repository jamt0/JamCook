import React from "react";

import Scaffold from "components/Scaffold/Scaffold";
import { IonItem, IonList } from "@ionic/react";

const Settings: React.FC = ( ) => {

  return (
    <Scaffold
      tituloHeader="Configuraciones"
    >
      <IonList>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/settings/measurementUnits">
          <p className="text-lg">Unidades de medida</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/settings/theme">
          <p className="text-lg">Tema</p>
        </IonItem>
      </IonList>
    </Scaffold>
  );
};

export default Settings;