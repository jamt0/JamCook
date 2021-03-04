import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { chatbubbleOutline, heart, heartOutline } from "ionicons/icons";
import React, { FunctionComponent, useState } from "react";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import Center from "../Center/Center";
import Rating from "../Rating/Rating";
import Commentary from "../Commentary/Commentary";

interface Props {
  comentarios: {
    id: number;
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
  }[];
}

const CommentaryBox: FunctionComponent<Props> = ({ comentarios }) => {
  const handlerLikeButton = (e: any) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };

  const handlerAnswerButton = (e: any) => {
    e.preventDefault();
    console.log("object");
  };

  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      {comentarios.map((comentario) => {
        return (
          <>
            <Commentary
              comentario={comentario}
              isLiked={isLiked}
              handlerLikeButton={handlerLikeButton}
              handlerAnswerButton={handlerAnswerButton}
              key={comentario.id}
            />
          </>
        );
      })}
    </>
  );
};

export default CommentaryBox;
