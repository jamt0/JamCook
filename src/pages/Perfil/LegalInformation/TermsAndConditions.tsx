import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const TermsAndConditions: React.FC<RouteComponentProps> = ( ) => {

  return (
    <Scaffold tituloHeader="Terminos y Condiciones" >
      Terminos y Condiciones
    </Scaffold>
  );
};
  
export default TermsAndConditions;