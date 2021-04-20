import React from "react";
import { IonContent, IonPage, IonText } from "@ionic/react";
import Lottie from "react-lottie";
import animationData from "assets/40806-error-404.json";
import { useHistory } from "react-router";
import Button from "components/Button/Button";
import { useSettingsUser } from "context/settingsUser";

const NoFound: React.FC = () => {

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

  const handlerRedirectButton = (e: any) => {
    e.preventDefault();
    history.replace("/home");
  };

  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col justify-between max-w-screen-md mx-auto pt-16 pb-8 px-4 h-full">
          <div>
            <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
              <IonText className="text-red-600">{textos["jam"]}</IonText>
              <IonText className="text-purple-600">{textos["cook"]}</IonText>
            </h1>
            <h6 className="text-center text-gray-600 text-xl md:text-2xl mx-4">
              {textos["slogan"]}
            </h6>
          </div>
          <div className="flex flex-col justify-center h-full">
            <Lottie options={defaultOptions} height={220} width={375} />
            <h6 className="text-center mb-8 text-gray-600 text-xl md:text-2xl">
              {textos["page_404_ups"]}
            </h6>
          </div>
          <Button handler={handlerRedirectButton} label={textos["page_404_inicio"]} />
        </div>
      </IonContent>
    </IonPage>
  );
};
export default NoFound;
