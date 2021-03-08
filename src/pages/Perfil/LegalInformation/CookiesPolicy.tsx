import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const CookiesPolicy: React.FC<RouteComponentProps> = ( ) => {

  return (
    <Scaffold tituloHeader="Política de cookies">
      Las politicas
    </Scaffold>
  );
};
  
export default CookiesPolicy;