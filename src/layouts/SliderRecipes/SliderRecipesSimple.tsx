import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ImageCover from "components/ImageCover/ImageCover";
import Slides from "components/Slides/Slides";
import Slide from "components/Slide/Slide";
import Text from "components/Text/Text";
import Rating from "layouts/Rating/Rating";

interface Props {
  slidesPerView: number;
  nameListRecipes: string;
  recipes: {
    name: string;
    src: string;
    path: string;
    valoration: boolean[];
  }[];
}

const SliderRecipesSimple: FunctionComponent<Props> = ({ slidesPerView, recipes }) => {

  const slideOpts = {
    slidesPerView: slidesPerView,
    spaceBetween: 10,
  };

  return (
    <Slides options={slideOpts}>
      {recipes.map((recipe, index) => {
        return (
          <Slide key={index}>
            <Link to={recipe.path} className="w-full">
            <ImageCover src={recipe.src} height={40} rounded >
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
