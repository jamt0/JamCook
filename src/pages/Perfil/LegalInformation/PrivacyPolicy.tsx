import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const PrivacyPolicy: React.FC<RouteComponentProps> = ({ history }) => {

  const handlerGoBackButton = (e: any) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <Scaffold tituloHeader="Política de privacidad" onClickBack={handlerGoBackButton}>
      Política de privacidad
    </Scaffold>
  );
};
  
export default PrivacyPolicy;