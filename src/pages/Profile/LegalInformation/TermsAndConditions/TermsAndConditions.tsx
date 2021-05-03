import React from "react";
import TermsAndConditionsView from "pages/Profile/LegalInformation/TermsAndConditions/TermsAndConditionsView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const TermsAndConditions: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  return (
    <TermsAndConditionsView textos={textos}/>
  );
};

export default TermsAndConditions;
