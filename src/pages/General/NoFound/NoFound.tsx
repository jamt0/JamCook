import React from "react";
import animationData from "assets/40806-error-404.json";
import { useSettingsUser } from "context/settingsUser";
import NoFoundView from "./NoFoundView";

const NoFound: React.FC = () => {
  const { textos } = useSettingsUser()!;

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