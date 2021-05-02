import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";

type Props = {
  textos: any;
};

const TermsAndConditionsView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.terminos_condiciones}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Terminos y Condiciones</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default TermsAndConditionsView;
