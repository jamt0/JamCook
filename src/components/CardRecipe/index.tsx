import React, { FunctionComponent, useState } from "react";
import CardRecipeView from "components/CardRecipe/CardRecipeView";
import { TRecipeCard } from "utils/types";

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
    <CardRecipeView
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
