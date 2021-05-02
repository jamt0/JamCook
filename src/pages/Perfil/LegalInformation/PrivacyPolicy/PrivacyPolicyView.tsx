import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";

type Props = {
  textos: any;
};

const PrivacyPolicyView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.politica_privacidad}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Política de privacidad</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default PrivacyPolicyView;
