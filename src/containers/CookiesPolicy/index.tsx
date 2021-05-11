import React from "react";
import { CookiesPolicyView } from "layouts";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const CookiesPolicy: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);
  
  return <CookiesPolicyView texts={texts} />;
};

export default CookiesPolicy;