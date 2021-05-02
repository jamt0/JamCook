import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ImageCover from "components/ImageCover/ImageCover";
import Slides from "components/Slides/Slides";
import Slide from "components/Slide/Slide";
import Text from "components/Text/Text";
import Rating from "layouts/Rating/Rating";
import { TRecipeStars } from "utils/types";
import RoutesPath from "utils/routesPath";

type Props = {
  slidesPerView: number;
  listRecipes: {
    id: string;
    recipes: TRecipeStars[];
  }
}

const SliderRecipesSimple: FunctionComponent<Props> = ({ ...props }) => {

  const slideOpts = {
    slidesPerView: props.slidesPerView,
    spaceBetween: 10,
  };

  return (
    <Slides options={slideOpts}>
      {props.listRecipes.recipes.map((recipe, index) => {
        return (
          <Slide key={index}>
            <Link to={`${RoutesPath.recipe + recipe.id}`} className="w-full">
            <ImageCover src={recipe.pathRecipeImage} height={40} rounded >
              <Rating stars={recipe.valoration} size={6} color="light" />
              <Text color="light" align="left" className="font-extrabold">{recipe.name}</Text>
            </ImageCover>
            </Link>
          </Slide>
        );
      })}
    </Slides>
  );
};

export default SliderRecipesSimple;
