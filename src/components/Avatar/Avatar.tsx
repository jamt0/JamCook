import React, { FunctionComponent } from "react";

interface Props {
    tamaño: string;
    responsive?: string;
    avatarUser: string;
}

const Avatar: FunctionComponent<Props> = ({ avatarUser, tamaño, responsive = null }) => {
  return (
    <div
      className={"h-" + tamaño + " w-" + tamaño + " md:h-" + (responsive == null? tamaño : responsive) + " md:w-" + (responsive == null? tamaño : responsive) + " bg-cover bg-center bg-gray-300 rounded-full"}
      style={{ backgroundImage: `url( ${avatarUser} )` }}
    ></div>
  );
};

export default Avatar;
