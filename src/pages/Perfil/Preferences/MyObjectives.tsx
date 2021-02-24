import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const MyObjectives: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Mis Objetivos" onClickBack={handlerGoBackButton} routeBack="/perfil/preferences">
      Mis Objetivos
    </Scaffold>
  );
};
  
export default MyObjectives;