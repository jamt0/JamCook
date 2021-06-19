import { FunctionComponent } from "react";
import { Scaffold, Button, SubTitle } from "UI";
import { Brand } from "components";
import Lottie from "react-lottie";
import RoutesPath from "routes";
import Welcome from "components/Welcome";

type Props = {
  texts: any;
  animationOptions: any;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
    <Welcome></Welcome>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
