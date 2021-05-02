import React from "react";
import CookiesPolicyView from "pages/Profile/LegalInformation/CookiesPolicy/CookiesPolicyView";
import { useSettingsUser } from "context/settingsUser";

const CookiesPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return <CookiesPolicyView textos={textos} />;
};

export default CookiesPolicy;