import React from "react";
import { IonItem, IonList } from "@ionic/react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";

const Preferences: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["perfil_preferencias"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonList>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/myObjectives"
          >
            <p className="text-lg">{textos["preferencias_mis_objetivos"]}</p>
          </IonItem>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/cookingLevel"
          >
            <p className="text-lg">{textos["preferencias_mi_nivel_cocina"]}</p>
          </IonItem>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/diet"
          >
            <p className="text-lg">{textos["preferencias_dieta"]}</p>
          </IonItem>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/allergies"
          >
            <p className="text-lg">
              {textos["preferencias_alergias_intolerancias"]}
            </p>
          </IonItem>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/dislikeIngredient"
          >
            <p className="text-lg">
              {textos["preferencias_ingredientes_no_gustan"]}
            </p>
          </IonItem>
          <IonItem
            className="px-6 pb-3"
            lines="none"
            routerLink="/perfil/preferences/comensals"
          >
            <p className="text-lg">
              {textos["preferencias_numero_comensales"]}
            </p>
          </IonItem>
        </IonList>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Preferences;
