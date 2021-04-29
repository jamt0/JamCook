import React, { FunctionComponent, useState } from "react";
import CardRecipeView from "layouts/CardRecipe/CardRecipeView";

type Recipe = {
  id: string;
  name: string;
  likes: number;
  ingredients: number;
  time: number;
  valoration: boolean[];
  pathRecipeImage: string;
  pathAvatarImage: string;
  nameUser: string;
};

type Props = {
  recipe: Recipe;
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
