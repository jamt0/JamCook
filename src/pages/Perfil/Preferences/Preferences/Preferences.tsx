import React from "react";
import PreferencesView from "pages/Perfil/Preferences/Preferences/PreferencesView";
import { useSettingsUser } from "context/settingsUser";

const Preferences: React.FC = () => {
  const { textos } = useSettingsUser()!;

  const items = [
    {
      name: textos["preferencias_mis_objetivos"],
      routerLink: "/perfil/preferences/myObjectives",
    },
    {
      name: textos["preferencias_mi_nivel_cocina"],
      routerLink: "/perfil/preferences/cookingLevel",
    },
    {
      name: textos["preferencias_dieta"],
      routerLink: "/perfil/preferences/diet",
    },
    {
      name: textos["preferencias_alergias_intolerancias"],
      routerLink: "/perfil/preferences/allergies",
    },
    {
      name: textos["preferencias_ingredientes_no_gustan"],
      routerLink: "/perfil/preferences/dislikeIngredient",
    },
    {
      name: textos["preferencias_numero_comensales"],
      routerLink: "/perfil/preferences/comensals",
    },
  ];
  
  return (
    <PreferencesView title={textos["perfil_preferencias"]} items={items} />
  );
};

export default Preferences;
