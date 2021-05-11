import React, { FunctionComponent } from "react";
import { Scaffold } from "JamUI";

type Props = {};

const AboutUsView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={"sobre"}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <h1>Sobre la mejor app.</h1>
    </Scaffold.Content>
  </Scaffold>
);
export default AboutUsView;
