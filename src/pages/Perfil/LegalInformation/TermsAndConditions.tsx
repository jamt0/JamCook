import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const TermsAndConditions: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Terminos y Condiciones" onClickBack={handlerGoBackButton}>
      Terminos y Condiciones
    </Scaffold>
  );
};
  
export default TermsAndConditions;