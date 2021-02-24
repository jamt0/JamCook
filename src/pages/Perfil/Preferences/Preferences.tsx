import { IonItem, IonList } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";

const Preferences: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Preferencias" onClickBack={handlerGoBackButton} routeBack="/home/perfil">
      <IonList>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/myObjectives">
            <p className="text-lg">Mis objetivos</p>
          </IonItem>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/cookingLevel">
            <p className="text-lg">Mi nivel de cocina</p>
          </IonItem>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/diet">
            <p className="text-lg">Dieta</p>
          </IonItem>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/allergies">
            <p className="text-lg">Alergias e intolerancias</p>
          </IonItem>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/dislikeIngredient">
            <p className="text-lg">Ingredientes que no me gustan</p>
          </IonItem>
          <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/preferences/comensals">
            <p className="text-lg">Número de comensales</p>
          </IonItem>
        </IonList>
    </Scaffold>
  );
};
  
export default Preferences;