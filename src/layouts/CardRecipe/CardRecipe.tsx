import { FunctionComponent, useState } from "react";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import ImageRecipe from "components/ImageRecipe/ImageRecipe";
import Avatar from "components/Avatar/Avatar";
import Card from "components/Card/Card";
import Rating from "components/Rating/Rating";
import Text from "components/Text/Text";
import {
  timerOutline,
  nutritionOutline,
  arrowRedoOutline,
  bookmarkOutline,
  bookmark,
  heartOutline,
  heart,
} from "ionicons/icons";

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
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const handlerLikeButton = (e: any) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };
  const handlerShareButton = (e: any) => {
    e.preventDefault();
  };
  const handlerFavButton = (e: any) => {
    e.preventDefault();
    setIsMarked(!isMarked);
  };

  return (
    <Card color="light">
      <Card.Header color="light">
        <Card.Header.Compact>
          <Avatar src={recipe.pathAvatarImage} size={8} />
        </Card.Header.Compact>
        <Card.Header.Expanded>{recipe.nameUser}</Card.Header.Expanded>
        <Card.Header.Compact>
          <IonIcon icon={nutritionOutline} color="medium"/>
          <span className="ml-1 mr-2">{recipe.ingredients}</span>
          <IonIcon icon={timerOutline} color="medium"/>
          <span className="ml-1">{recipe.time}</span>
        </Card.Header.Compact>
      </Card.Header>
      <Card.Content routerLink={"/recipe"}>
        <ImageRecipe src={recipe.pathRecipeImage} height={60}>
          <Rating stars={recipe.valoration} size={6} color="light" />
          <Text color="light" align="left" className="font-extrabold">{recipe.name}</Text>
        </ImageRecipe>
      </Card.Content>
      <Card.Header color="light">
        <Card.Header.Compact>
          <IonButtons>
            <IonButton onClick={handlerShareButton}>
              <IonIcon
                icon={arrowRedoOutline}
                color="medium"
                className="text-4xl -mx-2"
              />
            </IonButton>
          </IonButtons>
          <IonButtons>
            <IonButton onClick={handlerLikeButton}>
              <IonIcon
                icon={isLiked ? heart : heartOutline}
                color="medium"
                className="text-4xl my-auto -mx-2"
              />
            </IonButton>
          </IonButtons>
          <Text color="medium" align="left" className="text-xl my-px pt-1">{recipe.likes}</Text>
        </Card.Header.Compact>
        <Card.Header.Expanded />
        <Card.Header.Compact>
          <IonButtons>
            <IonButton onClick={handlerFavButton}>
              <IonIcon
                icon={isMarked ? bookmark : bookmarkOutline}
                color="medium"
                className="text-4xl -mx-2"
              />
            </IonButton>
          </IonButtons>
        </Card.Header.Compact>
      </Card.Header>
    </Card>
  );
};

export default CardRecipe;
