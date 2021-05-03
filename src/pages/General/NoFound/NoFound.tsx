import React from "react";
import animationData from "assets/40806-error-404.json";
import { useSettingsUser } from "context/settingsUser";
import NoFoundView from "./NoFoundView";
import useShowTabs from "hooks/useShowTabs";

const NoFound: React.FC = () => {
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

  return <NoFoundView textos={textos} animationOptions={animationOptions} />;
};

export default NoFound;