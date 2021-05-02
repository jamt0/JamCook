import React from "react";
import CookiesPolicyView from "pages/Perfil/LegalInformation/CookiesPolicy/CookiesPolicyView";
import { useSettingsUser } from "context/settingsUser";

const CookiesPolicy: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return <CookiesPolicyView textos={textos} />;
};

export default CookiesPolicy;