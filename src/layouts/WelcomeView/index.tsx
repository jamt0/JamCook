import React, { FunctionComponent } from "react";
import { Scaffold, Button, SubTitle } from "JamUI";
import { Brand } from "components";
import Lottie from "react-lottie";
import RoutesPath from "routes";

type Props = {
  texts: any;
  animationOptions: any;
};

const WelcomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Brand texts={props.texts} />
          <SubTitle color="medium">{props.texts.slogan}</SubTitle>
        </div>
        <Lottie options={props.animationOptions} height={350} width={350} />
        <div className="pt-2 grid md:grid-cols-2 gap-4">
          <Button routerLink={RoutesPath.signIn} color="secondary">
            {props.texts.ingresar}
          </Button>
          <Button routerLink={RoutesPath.signUp}>
            {props.texts.registrarse}
          </Button>
        </div>
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default WelcomeView;
