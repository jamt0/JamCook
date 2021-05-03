import React from "react";
import animationData from "assets/26901-cooking.json";
import { useSettingsUser } from "context/settingsUser";
import WelcomeView from "pages/Welcome/WelcomeView";
import useShowTabs from "hooks/useShowTabs";

const Welcome: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <WelcomeView textos={textos} animationOptions={animationOptions} />;
};

export default Welcome;
