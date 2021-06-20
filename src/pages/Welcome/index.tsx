import React from "react";
import View from "./view";
import animationData from "assets/26901-cooking.json";
import { useTranslation } from 'react-i18next';
import useShowTabs from "hooks/useShowTabs";

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  useShowTabs(false);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <View texts={t} animationOptions={animationOptions} />;
};

export default Welcome;
