import React, { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ImageCover from "components/ImageCover/ImageCover";
import Slides from "components/Slides/Slides";
import Slide from "components/Slide/Slide";
import Text from "components/Text/Text";
import { useSettingsUser } from "context/settingsUser";
import SubTitle from "components/Text/SubTitle";
import Center from "components/Center/Center";
import { TRecipe } from "utils/types";

interface Props {
  slidesPerView: number;
  nameListRecipes: string;
  recipes: TRecipe[];
}

const SliderRecipes: FunctionComponent<Props> = ({
  nameListRecipes,
  slidesPerView,
  recipes,
}) => {
  const { textos } = useSettingsUser()!;

  const slideOpts = {
    slidesPerView: slidesPerView,
    spaceBetween: 20,
  };

  return (
    <Fragment>
      <div className="grid grid-flow-col gap-8">
        <SubTitle
          color="dark"
          align="left"
          className="truncate font-black mt-6"
        >
          {nameListRecipes}
        </SubTitle>
        <Center direction="row" justify="end">
          <Text color="primary" align="right">
            <Link to="/recipes">{textos["ver_mas"]}</Link>
          </Text>
        </Center>
      </div>
      <Slides options={slideOpts}>
        {recipes.map((recipe, index) => {
          return (
            <Slide key={index}>
              <Link to={`recipe/${recipe.id}`} className="w-full">
                <div className="flex flex-col">
                  <ImageCover src={recipe.pathRecipeImage} height={44} rounded />
                  <Text color="dark" align="left" className="mt-2 text-base">
                    {recipe.name}
                  </Text>
                </div>
              </Link>
            </Slide>
          );
        })}
      </Slides>
    </Fragment>
  );
};

export default SliderRecipes;
