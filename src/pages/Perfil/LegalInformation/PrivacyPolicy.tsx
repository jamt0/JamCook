import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Scaffold from "../../../components/Scaffold/Scaffold";
  
const PrivacyPolicy: React.FC<RouteComponentProps> = ( ) => {

  return (
    <Scaffold tituloHeader="Política de privacidad" >
      Política de privacidad
    </Scaffold>
  );
};
  
export default PrivacyPolicy;