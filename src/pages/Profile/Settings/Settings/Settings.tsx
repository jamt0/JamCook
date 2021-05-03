import React from "react";
import { useSettingsUser } from "context/settingsUser";
import SettingsView from "pages/Profile/Settings/Settings/SettingsView";
import useShowTabs from "hooks/useShowTabs";

const Settings: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);
  
  return (
    <SettingsView textos={textos} />
  );
};

export default Settings;
