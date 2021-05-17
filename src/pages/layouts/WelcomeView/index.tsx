import React, { FunctionComponent } from "react";
import { Scaffold, Button, SubTitle } from "JamUI";
import { Brand } from "components";
import Lottie from "react-lottie";
import RoutesPath from "routes";
import Welcome from "components/Welcome";

type Props = {
  texts: any;
  animationOptions: any;
};

const WelcomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
    <Welcome></Welcome>
    </Scaffold.Content>
  </Scaffold>
);
export default WelcomeView;
