import React from "react";
import animationData from "assets/26901-cooking.json";
import { WelcomeView } from "pages/layouts";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const Welcome: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <WelcomeView texts={texts} animationOptions={animationOptions} />;
};

export default Welcome;
