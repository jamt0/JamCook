import React from "react";
import View from "./view";
import animationData from "assets/40806-error-404.json";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const NoFound: React.FC = () => {
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

  return <View texts={texts} animationOptions={animationOptions} />;
};

export default NoFound;