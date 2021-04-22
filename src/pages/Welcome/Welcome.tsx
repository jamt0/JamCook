import { IonContent, IonPage, IonText } from "@ionic/react";
import React from "react";
import Lottie from "react-lottie";
import animationData from "assets/26901-cooking.json";
import Button from "components/Button/Button";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import Scaffold from "components/Scaffold/Scaffold";

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
      <Scaffold.Content>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
              <IonText className="text-red-600">{textos["jam"]}</IonText>
              <IonText className="text-purple-600">{textos["cook"]}</IonText>
            </h1>
            <h6 className="text-center text-gray-600 text-xl md:text-2xl mx-4">
              {textos["slogan"]}
            </h6>
          </div>
          <Lottie options={defaultOptions} height={350} width={350} />
          <div className="px-4 pt-2 grid md:grid-cols-2 gap-4">
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
