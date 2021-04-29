import React, { FunctionComponent } from "react";
import SliderRecipes from "layouts/SliderRecipes/SliderRecipes";
import Searcher from "components/Searcher/Searcher";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";

type Props = {
  textos: any;
  slidesPerView: any;
  listRecipes: any;
};

const Search: FunctionComponent<Props> = ({
  textos,
  slidesPerView,
  listRecipes
}) => {
  return (
    <Scaffold>
      <Scaffold.Content>
        <Title align="center" color="medium">
          {textos["slogan_2_1"]}
          <br />
          {textos["slogan_2_2"]}
        </Title>
        <Searcher placeHolder={textos["search_buscar_recetas"]} />
        {listRecipes.map(recipes => {
          return(
            <SliderRecipes recipes={recipes.recipes} slidesPerView={slidesPerView} nameListRecipes={recipes.nameList}/>
          );
        })}
      </Scaffold.Content>
    </Scaffold>
  );
};

export default Search;
