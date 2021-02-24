import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const DislikeIngredient: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Mis Objetivos" onClickBack={handlerGoBackButton}>
      Ingredientes Feos
    </Scaffold>
  );
};
  
export default DislikeIngredient;