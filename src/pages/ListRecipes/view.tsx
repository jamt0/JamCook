import { FunctionComponent } from "react";
import { CardRecipe } from "components";
import { Scaffold } from "UI";
import { TRecipeCard } from "utils/types";

type Props = {
  listRecipes: {
    titleListRecipes: string;
    recipes: TRecipeCard[];
  };
};

const View: FunctionComponent<Props> = (props) => (
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
export default View;
