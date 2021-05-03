import React from "react";
import RoutesPath from "utils/routesPath";
import LegalInformationView from "pages/Profile/LegalInformation/LegalInformation/LegalInformationView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const LegalInformation: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  const items = [
    {
      name: textos.terminos_condiciones,
      routerLink: RoutesPath.termsAndConditions,
    },
    {
      name: textos.politica_privacidad,
      routerLink: RoutesPath.privacyPolicy,
    },
    {
      name: textos.politica_cookies,
      routerLink: RoutesPath.cookiesPolicy,
    },
  ];

  return <LegalInformationView textos={textos} items={items} />;
};

export default LegalInformation;
