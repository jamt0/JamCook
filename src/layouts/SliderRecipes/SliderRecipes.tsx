import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ImageRecipe from "components/ImageRecipe/ImageRecipe";
import Slides from "components/Slides/Slides";
import Slide from "components/Slide/Slide";
import Text from "components/Text/Text";
import { useSettingsUser } from "context/settingsUser";

interface Props {
  slidesPerView: number;
  nameListRecipes: string;
  recipes: {
    name: string;
    src: string;
    path: string;
  }[];
}

const SliderRecipes: FunctionComponent<Props> = ({ nameListRecipes, slidesPerView, recipes }) => {
  const { textos } = useSettingsUser()!;

  const slideOpts = {
    slidesPerView: slidesPerView,
    spaceBetween: 20,
  };

  return (
    <>
      <div className="grid grid-flow-col gap-8">
        <Text color="dark" align="left" className="truncate font-black">
          {nameListRecipes}
        </Text>
        <Text color="primary" align="right">
          <Link to="/recipes">{textos["ver_mas"]}</Link>
        </Text>
      </div>
      <Slides options={slideOpts}>
        {recipes.map((recipe, index) => {
          return (
            <Slide key={index}>
              <Link to={recipe.path} className="w-full">
                <div className="flex flex-col">
                  <ImageRecipe src={recipe.src} height={40} rounded />
                  <Text color="medium" align="left" className="font-bold">
                    {recipe.name}
                  </Text>
                </div>
              </Link>
            </Slide>
          );
        })}
      </Slides>
    </>
  );
};

export default SliderRecipes;
