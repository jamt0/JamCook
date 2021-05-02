import React, { FunctionComponent } from "react";
import CardRecipe from "layouts/CardRecipe/CardRecipe";
import Scaffold from "components/Scaffold/Scaffold";
import { TRecipeCard } from "utils/types";

type Props = {
  listRecipes: {
    titleListRecipes: string;
    recipes: TRecipeCard[];
  };
}

const ListRecipesView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.listRecipes.titleListRecipes}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      {props.listRecipes.recipes.map((recipe) => {
        return <CardRecipe key={recipe.id} recipe={recipe} />;
      })}
    </Scaffold.Content>
  </Scaffold>
);
export default ListRecipesView;
