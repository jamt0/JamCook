import React from "react";
import PrivacyPolicyView from "pages/Profile/LegalInformation/PrivacyPolicy/PrivacyPolicyView";
import { useSettingsUser } from "context/settingsUser";

const PrivacyPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <PrivacyPolicyView textos={textos} />
  );
};

export default PrivacyPolicy;
