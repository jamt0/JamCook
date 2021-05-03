import React from "react";
import PrivacyPolicyView from "pages/Profile/LegalInformation/PrivacyPolicy/PrivacyPolicyView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const PrivacyPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  return (
    <PrivacyPolicyView textos={textos} />
  );
};

export default PrivacyPolicy;
