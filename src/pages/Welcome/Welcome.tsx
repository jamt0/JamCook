import React from "react";
import Lottie from "react-lottie";
import animationData from "assets/26901-cooking.json";
import Button from "components/Button/Button";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";
import Brand from "components/Text/Brand";
import Slogan from "components/Text/Slogan";

const Welcome: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handlerSignInButton = (e: any) => {
    e.preventDefault();
    history.push("/signIn");
  };

  const handlerSignUpButton = (e: any) => {
    e.preventDefault();
    history.push("/signUp");
  };

  console.log("soy la page welcome");

  return (
    <Scaffold>
      <Scaffold.Content height="full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Brand />
            <Slogan color="medium">{textos["slogan"]}</Slogan>
          </div>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div className="pt-2 grid md:grid-cols-2 gap-4">
            <Button onClick={handlerSignInButton} color="secondary">
              {textos["ingresar"]}
            </Button>
            <Button onClick={handlerSignUpButton}>
              {textos["registrarse"]}
            </Button>
          </div>
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Welcome;
