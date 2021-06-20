import { FunctionComponent } from "react";
import { Scaffold } from "UI";

type Props = {
  texts: any;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('politica_privacidad')}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Política de privacidad</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
