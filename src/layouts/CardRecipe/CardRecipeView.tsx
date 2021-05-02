import React, { FunctionComponent } from "react";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import ImageCover from "components/ImageCover/ImageCover";
import Avatar from "components/Avatar/Avatar";
import Card from "components/Card/Card";
import Rating from "layouts/Rating/Rating";
import Text from "components/Text/Text";
import RoutesPath from "utils/routesPath";
import { TRecipeCard } from "utils/types";
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
        <IonButtons>
          <IonButton onClick={props.handlerShareButton}>
            <IonIcon
              icon={arrowRedoOutline}
              color="medium"
              className="text-4xl -mx-2"
            />
          </IonButton>
        </IonButtons>
        <IonButtons>
          <IonButton onClick={props.handlerLikeButton}>
            <IonIcon
              icon={props.like ? heart : heartOutline}
              color="medium"
              className="text-4xl my-auto -mx-2"
            />
          </IonButton>
        </IonButtons>
        <Text color="medium" align="left" className="text-xl my-px pt-1">
          {props.recipe.likes}
        </Text>
      </Card.Header.Compact>
      <Card.Header.Expanded />
      <Card.Header.Compact>
        <IonButtons>
          <IonButton onClick={props.handlerMarkButton}>
            <IonIcon
              icon={props.mark ? bookmark : bookmarkOutline}
              color="medium"
              className="text-4xl -mx-2"
            />
          </IonButton>
        </IonButtons>
      </Card.Header.Compact>
    </Card.Header>
  </Card>
);

export default CardRecipeView;
