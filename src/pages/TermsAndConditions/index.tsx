import React from "react";
import View from "./view";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const TermsAndConditions: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  return (
    <View texts={texts}/>
  );
};

export default TermsAndConditions;
