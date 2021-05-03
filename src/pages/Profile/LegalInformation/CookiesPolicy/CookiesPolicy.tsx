import React from "react";
import CookiesPolicyView from "pages/Profile/LegalInformation/CookiesPolicy/CookiesPolicyView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const CookiesPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);
  
  return <CookiesPolicyView textos={textos} />;
};

export default CookiesPolicy;