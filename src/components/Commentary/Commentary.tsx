import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import React, { FunctionComponent, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Center from "../Center/Center";
import Rating from "../Rating/Rating";

interface Props {
  comentario: {
    avatarUser: string;
    nombreUsuario: string;
    fechaPublicacion: string;
    comentario: string;
    valoracion: boolean[];
    respuestas: {
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
  return (
    <Center direccion="col" eje="y">
      <div className="grid grid-flow-col">
        <div className="justify-self-start flex flex-row">
          <Avatar avatarUser={comentario.avatarUser} tamaño="12" />
          <Center direccion="col" eje="y">
            <h3 className="text-base ml-2">{comentario.nombreUsuario}</h3>
            <h3 className="text-xs ml-2">{comentario.fechaPublicacion}</h3>
          </Center>
        </div>
        <div className="justify-self-end">
          <Center direccion="row" eje="y" className="h-full">
            <Rating estrellas={comentario.valoracion} tamaño={"4"} />
          </Center>
        </div>
      </div>
      <h3 className="text-xs ml-14 my-4">{comentario.comentario}</h3>
      <Center direccion="row" eje="x" className="mb-2">
        <IonButtons slot="start" className="ml-12 mr-2">
          <IonButton onClick={handlerLikeButton}>
            <IonIcon
              icon={isLiked ? heart : heartOutline}
              className="text-gray-500 text-xl"
            />
          </IonButton>
        </IonButtons>
        <IonButtons slot="start" className="-ml-2">
          <IonButton onClick={handlerAnswerButton}>
            <IonIcon
              icon={chatbubbleOutline}
              className="text-gray-500 text-xl"
            />
          </IonButton>
        </IonButtons>
        <Button label="Responder" type="Link" handler={handlerAnswerButton} />
      </Center>
      <div className="justify-self-end ml-14 mb-6">
      <Button label="7 Respuestas" type="Link" handler={handlerAnswerButton} />
      </div>
    </Center>
  );
};

export default Commentary;
