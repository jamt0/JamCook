import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../components/Scaffold/Scaffold";

const Recipe: React.FC<RouteComponentProps> = ({ history }) => {
  
  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold
      tituloHeader="Tacos de Carnitas"
      onClickBack={handlerGoBackButton}
      footer={<h1>Funciona footer</h1>}
    >
      <h1>esta funcionando</h1>
    </Scaffold>
  );
};

export default Recipe;
