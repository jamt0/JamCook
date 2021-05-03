import React from "react";
import RoutesPath from "utils/routesPath";
import PreferencesView from "pages/Profile/Preferences/Preferences/PreferencesView";
import { useSettingsUser } from "context/settingsUser";
import useShowTabs from "hooks/useShowTabs";

const Preferences: React.FC = () => {
  const { textos } = useSettingsUser()!;

  useShowTabs(false);

  const items = [
    {
      name: textos.preferencias_mis_objetivos,
      routerLink: RoutesPath.myObjectives,
    },
    {
      name: textos.preferencias_mi_nivel_cocina,
      routerLink: RoutesPath.cookingLevel,
    },
    {
      name: textos.preferencias_dieta,
      routerLink: RoutesPath.diet,
    },
    {
      name: textos.preferencias_alergias_intolerancias,
      routerLink: RoutesPath.allergies,
    },
    {
      name: textos.preferencias_ingredientes_no_gustan,
      routerLink: RoutesPath.dislikeIngredient,
    },
    {
      name: textos.preferencias_numero_comensales,
      routerLink: RoutesPath.comensals,
    },
  ];
  
  return (
    <PreferencesView title={textos.perfil_preferencias} items={items} />
  );
};

export default Preferences;
