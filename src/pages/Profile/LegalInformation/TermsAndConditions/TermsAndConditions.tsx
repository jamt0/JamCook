import React from "react";
import TermsAndConditionsView from "pages/Profile/LegalInformation/TermsAndConditions/TermsAndConditionsView";
import { useSettingsUser } from "context/settingsUser";

const TermsAndConditions: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <TermsAndConditionsView textos={textos}/>
  );
};

export default TermsAndConditions;
