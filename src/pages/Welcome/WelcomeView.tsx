import React, { FunctionComponent } from "react";
import Lottie from "react-lottie";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Brand from "components/Text/Brand";
import Slogan from "components/Text/Slogan";

type Props = {
  textos: any;
  animationOptions: any;
};

const WelcomeView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Brand textos={props.textos}/>
          <Slogan color="medium">{props.textos.slogan}</Slogan>
        </div>
        <Lottie options={props.animationOptions} height={350} width={350} />
        <div className="pt-2 grid md:grid-cols-2 gap-4">
          <Button routerLink="/signIn" color="secondary">
            {props.textos.ingresar}
          </Button>
          <Button routerLink="/signUp">{props.textos.registrarse}</Button>
        </div>
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default WelcomeView;
