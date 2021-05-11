import React from "react";
import RoutesPath from "utils/routesPath";
import PreferencesView from "pages/Profile/Preferences/Preferences/PreferencesView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const Preferences: React.FC = () => {
  const { texts } = useSettingsUser()!;

  useShowTabs(false);

  const items = [
    {
      name: texts.preferencias_mis_objetivos,
      routerLink: RoutesPath.myObjectives,
    },
    {
      name: texts.preferencias_mi_nivel_cocina,
      routerLink: RoutesPath.cookingLevel,
    },
    {
      name: texts.preferencias_dieta,
      routerLink: RoutesPath.diet,
    },
    {
      name: texts.preferencias_alergias_intolerancias,
      routerLink: RoutesPath.allergies,
    },
    {
      name: texts.preferencias_ingredientes_no_gustan,
      routerLink: RoutesPath.dislikeIngredient,
    },
    {
      name: texts.preferencias_numero_comensales,
      routerLink: RoutesPath.comensals,
    },
  ];
  
  return (
    <PreferencesView title={texts.perfil_preferencias} items={items} />
  );
};

export default Preferences;
