import React from "react";
import Scaffold from "components/Scaffold/Scaffold";
import { useSettingsUser } from "context/settingsUser";
import ItemIcon from "layouts/ItemIcon/ItemIcon";

const Preferences: React.FC = () => {
  const { textos } = useSettingsUser()!;

  return (
    <Scaffold>
      <Scaffold.Header title={textos["perfil_preferencias"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <ItemIcon routerLink="/perfil/preferences/myObjectives">
          {textos["preferencias_mis_objetivos"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/preferences/cookingLevel">
          {textos["preferencias_mi_nivel_cocina"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/preferences/diet">
          {textos["preferencias_dieta"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/preferences/allergies">
          {textos["preferencias_alergias_intolerancias"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/preferences/dislikeIngredient">
          {textos["preferencias_ingredientes_no_gustan"]}
        </ItemIcon>
        <ItemIcon routerLink="/perfil/preferences/comensals">
          {textos["preferencias_numero_comensales"]}
        </ItemIcon>
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Preferences;
