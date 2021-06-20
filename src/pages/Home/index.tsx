import React from "react";
import View from "./view";
import { useTranslation } from 'react-i18next';
import { useUI } from "context/UI";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { showTabs } = useUI();

  const tabBarStyle = showTabs ? undefined : { display: "none" };

  return <View texts={t} tabBarStyle={tabBarStyle}/>;
};

export default Home;
