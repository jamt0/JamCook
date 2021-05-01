import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import ItemIcon from "layouts/ItemIcon/ItemIcon";

type Props = {
  textos: any;
};

const SettingsView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos["configuraciones"]}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <ItemIcon routerLink="/perfil/settings/measurementUnits">
        {props.textos["unidades_medida"]}
      </ItemIcon>
      <ItemIcon routerLink="/perfil/settings/theme">{props.textos["tema"]}</ItemIcon>
    </Scaffold.Content>
  </Scaffold>
);
export default SettingsView;
