import React from "react";
import TermsAndConditionsView from "pages/Perfil/LegalInformation/TermsAndConditions/TermsAndConditionsView";
import { useSettingsUser } from "context/settingsUser";

const TermsAndConditions: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <TermsAndConditionsView textos={textos}/>
  );
};

export default TermsAndConditions;
