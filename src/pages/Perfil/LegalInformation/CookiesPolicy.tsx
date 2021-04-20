import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
  
const CookiesPolicy: React.FC = ( ) => {

  const { textos } = useSettingsUser()!;

  return (
    <Scaffold tituloHeader={textos["politica_cookies"]}>
      Las politicas
    </Scaffold>
  );
};
  
export default CookiesPolicy;