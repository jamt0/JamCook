import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Text, Slides, Slide, ImageCover } from "UI";
import { Rating } from "components";
import { TRecipeStars } from "models";
import namesRoutes from "routes/names";

type Props = {
  slidesPerView: number;
  listRecipes: {
    id: string;
    recipes: TRecipeStars[];
  };
};

const SliderRecipesSimple: FunctionComponent<Props> = (props) => {
  const slideOpts = {
    slidesPerView: props.slidesPerView,
    spaceBetween: 10,
  };

  return (
    <Slides options={slideOpts}>
      {props.listRecipes.recipes.map((recipe, index) => {
        return (
          <Slide key={index}>
            <Link to={namesRoutes.recipe + recipe.id} className="w-full">
              <ImageCover src={recipe.pathRecipeImage} height={40} rounded>
                <Rating stars={recipe.valoration} size={6} color="light" />
                <Text color="light" align="left" className="font-extrabold">
                  {recipe.name}
                </Text>
              </ImageCover>
            </Link>
          </Slide>
        );
      })}
    </Slides>
  );
};

export default SliderRecipesSimple;