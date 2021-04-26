import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
import ItemIcon from "layouts/ItemIcon/ItemIcon";

const LegalInformation: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["informacion_legal"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
      <ItemIcon routerLink="/perfil/legalInformation/termsAndConditions">
          {textos["terminos_condiciones"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/legalInformation/privacyPolicy">
          {textos["politica_privacidad"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/legalInformation/cookiesPolicy">
          {textos["politica_cookies"]}
        </ItemIcon>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default LegalInformation;
