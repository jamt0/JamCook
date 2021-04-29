import React, { FunctionComponent } from "react";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import ImageCover from "components/ImageCover/ImageCover";
import Avatar from "components/Avatar/Avatar";
import Card from "components/Card/Card";
import Rating from "layouts/Rating/Rating";
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
  like: boolean;
  mark: boolean;
  handlerShareButton: (e: any) => void;
  handlerLikeButton: (e: any) => void;
  handlerMarkButton: (e: any) => void;
};

const CardRecipeView: FunctionComponent<Props> = ({
  recipe,
  like,
  mark,
  handlerShareButton,
  handlerLikeButton,
  handlerMarkButton,
}) => {
  return (
    <Card color="light">
      <Card.Header color="light">
        <Card.Header.Compact>
          <Avatar src={recipe.pathAvatarImage} size={8} />
        </Card.Header.Compact>
        <Card.Header.Expanded>{recipe.nameUser}</Card.Header.Expanded>
        <Card.Header.Compact>
          <IonIcon icon={nutritionOutline} color="medium" />
          <span className="ml-1 mr-2">{recipe.ingredients}</span>
          <IonIcon icon={timerOutline} color="medium" />
          <span className="ml-1">{recipe.time}</span>
        </Card.Header.Compact>
      </Card.Header>
      <Card.Content routerLink={"/recipe"}>
        <ImageCover src={recipe.pathRecipeImage} height={60}>
          <Rating stars={recipe.valoration} size={6} color="light" />
          <Text color="light" align="left" className="font-extrabold">
            {recipe.name}
          </Text>
        </ImageCover>
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
                icon={like ? heart : heartOutline}
                color="medium"
                className="text-4xl my-auto -mx-2"
              />
            </IonButton>
          </IonButtons>
          <Text color="medium" align="left" className="text-xl my-px pt-1">
            {recipe.likes}
          </Text>
        </Card.Header.Compact>
        <Card.Header.Expanded />
        <Card.Header.Compact>
          <IonButtons>
            <IonButton onClick={handlerMarkButton}>
              <IonIcon
                icon={mark ? bookmark : bookmarkOutline}
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

export default CardRecipeView;
