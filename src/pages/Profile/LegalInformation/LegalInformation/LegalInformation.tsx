import React from "react";
import RoutesPath from "utils/routesPath";
import LegalInformationView from "pages/Profile/LegalInformation/LegalInformation/LegalInformationView";
import { useSettingsUser } from "context/settingsUser";

const LegalInformation: React.FC = () => {
  const { textos } = useSettingsUser()!;

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
