import { FunctionComponent } from "react";
import Response from "../Response/Response";
import React from "react";

interface Props {
  respuestas: {
    id: number;
    avatarUser: string;
    nombreUsuario: string;
    fechaPublicacion: string;
    comentario: string;
  }[];
}

const ResponseBox: FunctionComponent<Props> = ({ respuestas }) => {
  return (
    <>
      {respuestas.map((respuesta) => {
        return (
            <Response respuesta={respuesta} key={respuesta.id} />
        );
      })}
    </>
  );
};

export default ResponseBox;
