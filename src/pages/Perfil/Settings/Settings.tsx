import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { IonItem, IonList } from "@ionic/react";
import { useSettingsUser } from "context/settingsUser";

const Settings: React.FC = ( ) => {

  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
        <Scaffold.Header title={textos["configuraciones"]}>
          <Scaffold.Header.BackAction/>
        </Scaffold.Header>
      <Scaffold.Content>
      <IonList>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/settings/measurementUnits">
          <p className="text-lg">{textos["unidades_medida"]}</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/settings/theme">
          <p className="text-lg">{textos["tema"]}</p>
        </IonItem>
      </IonList>
      </Scaffold.Content>
      </Scaffold>
  );
};

export default Settings;