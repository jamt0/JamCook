import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const Comensals: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Mis Objetivos" onClickBack={handlerGoBackButton}>
      Comensales
    </Scaffold>
  );
};
  
export default Comensals;