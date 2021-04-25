import React, { FunctionComponent, useState } from "react";
import Commentary from "../Commentary/Commentary";
import ButtonLink from "components/ButtonLink/ButtonLink";

interface Props {
  comentarios: {
    id: number;
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
      <div className="mt-4">
        <ButtonLink>
          Ver todos los comentarios
        </ButtonLink>
      </div>
    </>
  );
};

export default CommentaryBox;
