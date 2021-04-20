import { IonItem, IonList } from "@ionic/react";
import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";

const LegalInformation: React.FC = ( ) => {

  const { textos } = useSettingsUser()!;
  
  return (
    <Scaffold tituloHeader={textos["informacion_legal"]} >
      <IonList>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/termsAndConditions">
          <p className="text-lg">{textos["terminos_condiciones"]}</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/privacyPolicy">
          <p className="text-lg">{textos["politica_privacidad"]}</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/cookiesPolicy">
          <p className="text-lg">{textos["politica_cookies"]}</p>
        </IonItem>
      </IonList>
    </Scaffold>
  );
};

export default LegalInformation;
  