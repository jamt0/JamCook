import React from "react";
import { useSettingsUser } from "context/settingsUser";
import { SettingsView } from "pages/layouts";
import useShowTabs from "hooks/useShowTabs";

const Settings: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);
  
  return (
    <SettingsView texts={texts} />
  );
};

export default Settings;
