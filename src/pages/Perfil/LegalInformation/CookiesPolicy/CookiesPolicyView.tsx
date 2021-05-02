import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";

type Props = {
  textos: any;
};

const CookiesPolicyView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.politica_cookies}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Las politicas</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default CookiesPolicyView;
