import React from "react";
import { useSettingsUser } from "context/settingsUser";
import View from "./view";
import useShowTabs from "hooks/useShowTabs";

const Settings: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);
  
  return (
    <View texts={texts} />
  );
};

export default Settings;
