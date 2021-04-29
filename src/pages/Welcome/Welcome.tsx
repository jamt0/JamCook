import React from "react";
import Lottie from "react-lottie";
import animationData from "assets/26901-cooking.json";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Brand from "components/Text/Brand";
import Slogan from "components/Text/Slogan";
import { useSettingsUser } from "context/settingsUser";

const Welcome: React.FC = () => {
  const { textos } = useSettingsUser()!;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log("soy la page welcome");

  return (
    <Scaffold>
      <Scaffold.Content height="full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <Brand/>
            <Slogan color="medium">{textos["slogan"]}</Slogan>
          </div>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div className="pt-2 grid md:grid-cols-2 gap-4">
            <Button routerLink="/signIn" color="secondary">
              {textos["ingresar"]}
            </Button>
            <Button routerLink="/signUp">
              {textos["registrarse"]}
            </Button>
          </div>
        </div>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Welcome;
