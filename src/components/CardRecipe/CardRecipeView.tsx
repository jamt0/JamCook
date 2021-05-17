import React, { FunctionComponent } from "react";
import { IonIcon } from "@ionic/react";
import { Avatar, ImageCover, Card, Text, ButtonIcon } from "JamUI";
import { Rating } from "components";
import { TRecipeCard } from "utils/types";
import RoutesPath from "routes";
import {
  timerOutline,
  nutritionOutline,
  arrowRedoOutline,
  bookmarkOutline,
  bookmark,
  heartOutline,
  heart,
} from "ionicons/icons";

type Props = {
  recipe: TRecipeCard;
  like: boolean;
  mark: boolean;
  handlerShareButton: (e: any) => void;
  handlerLikeButton: (e: any) => void;
  handlerMarkButton: (e: any) => void;
};

const CardRecipeView: FunctionComponent<Props> = (props) => (
  <Card color="light">
    <Card.Header color="light">
      <Card.Header.Compact>
        <Avatar src={props.recipe.pathAvatarImage} size={8} />
      </Card.Header.Compact>
      <Card.Header.Expanded>{props.recipe.nameUser}</Card.Header.Expanded>
      <Card.Header.Compact>
        <IonIcon icon={nutritionOutline} color="medium" />
        <span className="ml-1 mr-2">{props.recipe.ingredientsNumber}</span>
        <IonIcon icon={timerOutline} color="medium" />
        <span className="ml-1">{props.recipe.time}</span>
      </Card.Header.Compact>
    </Card.Header>
    <Card.Content routerLink={RoutesPath.recipe + props.recipe.id}>
      <ImageCover src={props.recipe.pathRecipeImage} height={60}>
        <Rating stars={props.recipe.valoration} size={6} color="light" />
        <Text color="light" align="left" className="font-extrabold">
          {props.recipe.nameRecipe}
        </Text>
      </ImageCover>
    </Card.Content>
    <Card.Header color="light">
      <Card.Header.Compact>
        <ButtonIcon
          onClick={props.handlerShareButton}
          icon={arrowRedoOutline}
          color="medium"
          size="4xl"
        />
        <ButtonIcon
          onClick={props.handlerLikeButton}
          icon={props.like ? heart : heartOutline}
          color="medium"
          size="4xl"
        />
        <Text color="medium" align="left" className="text-xl my-px pt-1">
          {props.recipe.likes}
        </Text>
      </Card.Header.Compact>
      <Card.Header.Expanded />
      <Card.Header.Compact>
        <ButtonIcon
          onClick={props.handlerMarkButton}
          icon={props.mark ? bookmark : bookmarkOutline}
          color="medium"
          size="4xl"
        />
      </Card.Header.Compact>
    </Card.Header>
  </Card>
);

export default CardRecipeView;
