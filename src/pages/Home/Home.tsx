import React from "react";
import HomeView from "pages/Home/HomeView";
import { useSettingsUser } from "context/settingsUser";
import { useUI } from "context/UI";

const Home: React.FC = () => {
  const { textos } = useSettingsUser()!;
  const { showTabs } = useUI();

  console.log("home")
  const tabBarStyle = showTabs ? undefined : { display: "none" };

  return <HomeView textos={textos} tabBarStyle={tabBarStyle}/>;
};

export default Home;
