import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
import ItemIcon from "layouts/ItemIcon/ItemIcon";

const Settings: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["configuraciones"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <ItemIcon routerLink="/perfil/settings/measurementUnits">
          {textos["unidades_medida"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/settings/theme">
          {textos["tema"]}
        </ItemIcon>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Settings;
