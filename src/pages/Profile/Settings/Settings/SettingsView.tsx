import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import ItemIcon from "layouts/ItemIcon/ItemIcon";
import RoutesPath from "utils/routesPath";

type Props = {
  textos: any;
};

const SettingsView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.configuraciones}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <ItemIcon routerLink={RoutesPath.measurementUnits}>
        {props.textos.unidades_medida}
      </ItemIcon>
      <ItemIcon routerLink={RoutesPath.theme}>{props.textos.tema}</ItemIcon>
    </Scaffold.Content>
  </Scaffold>
);
export default SettingsView;
