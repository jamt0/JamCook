import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
  
const TermsAndConditions: React.FC = ( ) => {

  const { textos } = useSettingsUser()!;

  return (
    <Scaffold tituloHeader={textos["terminos_condiciones"]} >
      Terminos y Condiciones
    </Scaffold>
  );
};
  
export default TermsAndConditions;