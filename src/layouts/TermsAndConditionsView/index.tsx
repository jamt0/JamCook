import React, { FunctionComponent } from "react";
import { Scaffold } from "JamUI";

type Props = {
  texts: any;
};

const TermsAndConditionsView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.terminos_condiciones}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Terminos y Condiciones</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default TermsAndConditionsView;
