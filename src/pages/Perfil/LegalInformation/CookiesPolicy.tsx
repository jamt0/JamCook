import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const CookiesPolicy: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Política de cookies" onClickBack={handlerGoBackButton}>
      Las politicas
    </Scaffold>
  );
};
  
export default CookiesPolicy;