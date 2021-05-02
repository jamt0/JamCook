import React from "react";
import HomeView from "pages/Home/HomeView";
import { useSettingsUser } from "context/settingsUser";

const Home: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return <HomeView textos={textos} />;
};

export default Home;
