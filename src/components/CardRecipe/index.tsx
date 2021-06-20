import { FunctionComponent, useState } from "react";
import View from "./view";
import { TRecipeCard } from "models";

type Props = {
  recipe: TRecipeCard;
};

const CardRecipe: FunctionComponent<Props> = ({ recipe }) => {
  const [like, setLike] = useState(false);
  const [mark, setMark] = useState(false);

  const handlerLikeButton = (e: any) => {
    e.preventDefault();
    setLike(!like);
  };
  const handlerShareButton = (e: any) => {
    e.preventDefault();
  };
  const handlerMarkButton = (e: any) => {
    e.preventDefault();
    setMark(!mark);
  };
  return (
    <View
      recipe={recipe}
      like={like}
      mark={mark}
      handlerMarkButton={handlerMarkButton}
      handlerShareButton={handlerShareButton}
      handlerLikeButton={handlerLikeButton}
    />
  );
};

export default CardRecipe;
