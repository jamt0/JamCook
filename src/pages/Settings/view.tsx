import { FunctionComponent } from "react";
import { Scaffold } from "UI";
import { ItemIcon } from "components";
import namesRoutes from "routes/names";

type Props = {
  texts: any;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('configuraciones')}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <ItemIcon routerLink={namesRoutes.measurementUnits}>
        {props.texts('unidades_medida')}
      </ItemIcon>
      <ItemIcon routerLink={namesRoutes.theme}>{props.texts('tema')}</ItemIcon>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
