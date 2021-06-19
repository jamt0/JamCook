import { FunctionComponent } from "react";
import { Avatar, Center, Item, Label, ButtonLink, Text } from "UI";
import { ResponseBox, Rating } from "components";
import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import { TCommentary } from "utils/types";
import { useSettingsUser } from "context/settingsUser";

type Props = {
  commentary: TCommentary;
  like: boolean;
  showResponses: boolean;
  handlerLikeButton: (e: any) => void;
  handlerShowAnswerButton: (e: any) => void;
};

const View: FunctionComponent<Props> = ({
  commentary,
  like,
  showResponses,
  handlerShowAnswerButton,
  handlerLikeButton,
}) => {
  const { texts } = useSettingsUser()!;

  return (
    <Item className="ion-no-padding" lines="full">
      <div>
        <Item className="ion-no-padding">
          <Avatar src={commentary.pathAvatarImage} size={10} />
          <Label className="ml-4">
            <Text>{commentary.nameUser}</Text>
            <Text>{commentary.date}</Text>
          </Label>
          <Rating stars={commentary.valoration} size={4} color="primary" />
        </Item>
        <Text color="medium" align="left" className="ml-14 mr-4">
          {commentary.commentary}
        </Text>
        <Center direction="row" justify="start" className="mb-4 w-full">
          <IonButtons slot="start" className="ml-12">
            <IonButton onClick={handlerLikeButton}>
              <IonIcon
                icon={like ? heart : heartOutline}
                color="medium"
                className="text-xl"
              />
            </IonButton>
          </IonButtons>
          <IonButtons slot="start" className="-ml-2">
            <IonButton onClick={handlerShowAnswerButton}>
              <IonIcon
                icon={chatbubbleOutline}
                color="medium"
                className="text-xl"
              />
            </IonButton>
          </IonButtons>
          <ButtonLink onClick={handlerShowAnswerButton}>
            {texts.responder}{" "}
          </ButtonLink>
        </Center>
        {commentary.responses.length > 0 && (
          <div className="ml-14">
            <div className="mb-4">
              <ButtonLink onClick={handlerShowAnswerButton}>
                {commentary.responses.length} {texts.respuesta}
                {commentary.responses.length > 1 ? "s" : ""}
              </ButtonLink>
            </div>
            {showResponses && (
              <div className="my-4">
                <ResponseBox responses={commentary.responses} />
              </div>
            )}
          </div>
        )}
      </div>
    </Item>
  );
};

export default View;
