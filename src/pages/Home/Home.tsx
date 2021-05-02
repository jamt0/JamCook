import React from "react";
import { useSettingsUser } from "context/settingsUser";
import HomeView from "pages/Home/HomeView";

const Home: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return <HomeView textos={textos} />;
};

export default Home;
