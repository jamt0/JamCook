import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
  
const PrivacyPolicy: React.FC = ( ) => {

  const { textos } = useSettingsUser()!;
  
  return (
    <Scaffold tituloHeader={textos["politica_privacidad"]} >
      Política de privacidad
    </Scaffold>
  );
};
  
export default PrivacyPolicy;