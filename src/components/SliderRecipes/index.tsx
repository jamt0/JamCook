import React, { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Text, Slides, Slide, SubTitle, Center, ImageCover } from "JamUI";
import { useSettingsUser } from "context/settingsUser";
import { TRecipe } from "utils/types";
import RoutesPath from "routes";

type Props = {
  slidesPerView: number;
  listRecipes: {
    id: string;
    nameListRecipes: string;
    recipes: TRecipe[];
  };
};

const SliderRecipes: FunctionComponent<Props> = (props) => {
  const { texts } = useSettingsUser()!;

  const slideOpts = {
    slidesPerView: props.slidesPerView,
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
          {props.listRecipes.nameListRecipes}
        </SubTitle>
        <Center direction="row" justify="end">
          <Text color="primary" align="right">
            <Link to={RoutesPath.listRecipes + props.listRecipes.id}>
              {texts.ver_mas}
            </Link>
          </Text>
        </Center>
      </div>
      <Slides options={slideOpts}>
        {props.listRecipes.recipes.map((recipe, index) => {
          return (
            <Slide key={index}>
              <Link to={RoutesPath.recipe + recipe.id} className="w-full">
                <div className="flex flex-col">
                  <ImageCover
                    src={recipe.pathRecipeImage}
                    height={44}
                    rounded
                  />
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
