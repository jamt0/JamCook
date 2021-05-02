import React from "react";
import { useSettingsUser } from "context/settingsUser";
import SettingsView from "pages/Profile/Settings/Settings/SettingsView";

const Settings: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <SettingsView textos={textos} />
  );
};

export default Settings;
