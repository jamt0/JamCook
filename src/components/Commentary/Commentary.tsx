import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import React, { FunctionComponent, useState } from "react";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Rating from "components/Rating/Rating";
import ResponseBox from "components/ResponseBox/ResponseBox";
import ButtonLink from "components/ButtonLink/ButtonLink";

interface Props {
  comentario: {
    avatarUser: string;
    nombreUsuario: string;
    fechaPublicacion: string;
    comentario: string;
    valoracion: boolean[];
    respuestas: {
      id: number;
      avatarUser: string;
      nombreUsuario: string;
      fechaPublicacion: string;
      comentario: string;
    }[];
  };
  isLiked: boolean;
  handlerLikeButton: (e: any) => void;
  handlerAnswerButton: (e: any) => void;
}

const Commentary: FunctionComponent<Props> = ({
  comentario,
  isLiked,
  handlerAnswerButton,
  handlerLikeButton,
}) => {

  const [mostarRespuestas, setmostarRespuestas] = useState(false)
  handlerAnswerButton = () => {
    setmostarRespuestas(!mostarRespuestas);
  }
  return (
    <Center direction="col" className="mt-4 border-b border-gray-300 ">
      <div className="grid grid-flow-col">
        <div className="justify-self-start flex flex-row">
          <Avatar src={comentario.avatarUser} size={12} />
          <Center direction="col">
            <h3 className="text-base ml-2">{comentario.nombreUsuario}</h3>
            <h3 className="text-xs ml-2">{comentario.fechaPublicacion}</h3>
          </Center>
        </div>
        <div className="justify-self-end">
          <Center direction="row" className="h-full">
            <Rating stars={comentario.valoracion} size={4} />
          </Center>
        </div>
      </div>
      <h3 className="text-base ml-14 my-4">{comentario.comentario}</h3>
      <Center direction="row" justify="start" className="mb-4 w-full">
        <IonButtons slot="start" className="ml-12 mr-2">
          <IonButton onClick={handlerLikeButton}>
            <IonIcon
              icon={isLiked ? heart : heartOutline}
              color="medium"
              className="text-xl"
            />
          </IonButton>
        </IonButtons>
        <IonButtons slot="start" className="-ml-2">
          <IonButton onClick={handlerAnswerButton}>
            <IonIcon
              icon={chatbubbleOutline}
              color="medium"
              className="text-xl"
            />
          </IonButton>
        </IonButtons>
        <ButtonLink onClick={handlerAnswerButton}>
          Responder
        </ButtonLink>
      </Center>
      {comentario.respuestas.length > 0 && 
        <div className="ml-14">
          <div className="mb-4">
            <ButtonLink onClick={handlerAnswerButton} >
              7 Respuestas
            </ButtonLink>
          </div>
          {mostarRespuestas && 
            <div className="my-4">
              <ResponseBox respuestas={comentario.respuestas}/>
            </div>
          }
        </div>
      }
    </Center>
  );
};

export default Commentary;
