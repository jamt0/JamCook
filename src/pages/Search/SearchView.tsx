import React, { FunctionComponent } from "react";
import Title from "components/Text/Title";
import Searcher from "components/Searcher/Searcher";
import Scaffold from "components/Scaffold/Scaffold";
import SliderRecipes from "layouts/SliderRecipes/SliderRecipes";
import { TRecipe } from "utils/types";

type Props = {
  textos: any;
  slidesPerView: number;
  listRecipes: {
    id: string;
    nameListRecipes: string;
    recipes: TRecipe[];
  }[];
};

const Search: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Content>
      <Title align="center" color="medium">
        {props.textos.slogan_2_1}
        <br />
        {props.textos.slogan_2_2}
      </Title>
      <Searcher placeHolder={props.textos.search_buscar_recetas} />
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
