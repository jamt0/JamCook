import React, { FunctionComponent } from "react";
import Avatar from "../Avatar/Avatar";
import Center from "../Center/Center";

interface Props {
  respuesta: {
    id: number;
    avatarUser: string;
    nombreUsuario: string;
    fechaPublicacion: string;
    comentario: string;
  };
}

const Response: FunctionComponent<Props> = ({ respuesta }) => {
  return (
    <Center direction="col">
      <div className="grid grid-flow-col">
        <div className="justify-self-start flex flex-row">
          <Avatar src={respuesta.avatarUser} size={12} />
          <Center direction="col">
            <h3 className="text-base ml-2">{respuesta.nombreUsuario}</h3>
            <h3 className="text-xs ml-2">{respuesta.fechaPublicacion}</h3>
          </Center>
        </div>
      </div>
      <h3 className="text-base ml-14 my-4">{respuesta.comentario}</h3>
    </Center>
  );
};

export default Response;
