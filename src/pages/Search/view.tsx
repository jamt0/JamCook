import { FunctionComponent } from "react";
import { SliderRecipes } from "components";
import { TRecipe } from "models";
import { Scaffold, Searcher, Title } from "UI";
import Welcome from "components/Welcome";

type Props = {
  texts: any;
  slidesPerView: number;
  listRecipes: {
    id: string;
    nameListRecipes: string;
    recipes: TRecipe[];
  }[];
};

const Search: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content>
			<Welcome/>
      <Title align="center" color="medium">
        {props.texts('slogan_2_1')}
        <br />
        {props.texts('slogan_2_2')}
      </Title>
      <Searcher placeHolder={props.texts('search_buscar_recetas')} />
      {props.listRecipes.map((recipes) => (
        <SliderRecipes
          listRecipes={recipes}
          slidesPerView={props.slidesPerView}
          key={recipes.id}
        />
      ))}
    </Scaffold.Content>
  </Scaffold>
);
export default Search;
