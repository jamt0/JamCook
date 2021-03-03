import { IonItem, IonList } from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";

const LegalInformation: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Información Legal" onClickBack={handlerGoBackButton}>
      <IonList>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/termsAndConditions">
          <p className="text-lg">Términos y condiciones</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/privacyPolicy">
          <p className="text-lg">Política de privacidad</p>
        </IonItem>
        <IonItem className="px-6 pb-3" lines="none" routerLink="/perfil/legalInformation/cookiesPolicy">
          <p className="text-lg">Política de cookies</p>
        </IonItem>
      </IonList>
    </Scaffold>
  );
};

export default LegalInformation;
  