import React from "react";
import CookiesPolicyView from "pages/Profile/LegalInformation/CookiesPolicy/CookiesPolicyView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const CookiesPolicy: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);
  
  return <CookiesPolicyView texts={texts} />;
};

export default CookiesPolicy;