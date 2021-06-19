import React from "react";
import View from "./view";
import { useSettingsUser } from "context/settingsUser";
import { useUI } from "context/UI";

const Home: React.FC = () => {
  const { texts } = useSettingsUser()!;
  const { showTabs } = useUI();

  const tabBarStyle = showTabs ? undefined : { display: "none" };

  return <View texts={texts} tabBarStyle={tabBarStyle}/>;
};

export default Home;
