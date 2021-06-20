import React from "react";
import View from "./view";
import namesRoutes from "routes/names";
import { useTranslation } from 'react-i18next';
import useShowTabs from "hooks/useShowTabs";

const Preferences: React.FC = () => {
  const { t } = useTranslation();

  useShowTabs(false);

  const items = [
    {
      name: t('preferencias_mis_objetivos'),
      routerLink: namesRoutes.myObjectives,
    },
    {
      name: t('preferencias_mi_nivel_cocina'),
      routerLink: namesRoutes.cookingLevel,
    },
    {
      name: t('preferencias_dieta'),
      routerLink: namesRoutes.diet,
    },
    {
      name: t('preferencias_alergias_intolerancias'),
      routerLink: namesRoutes.allergies,
    },
    {
      name: t('preferencias_ingredientes_no_gustan'),
      routerLink: namesRoutes.dislikeIngredient,
    },
    {
      name: t('preferencias_numero_comensales'),
      routerLink: namesRoutes.comensals,
    },
  ];
  
  return (
    <View title={t('perfil_preferencias')} items={items} />
  );
};

export default Preferences;
