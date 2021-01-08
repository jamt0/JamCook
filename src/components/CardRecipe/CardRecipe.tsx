import React, { FunctionComponent } from "react";
import { star } from "ionicons/icons";
import { Link } from "react-router-dom";
import { IonCard, IonIcon } from "@ionic/react";

interface Props {
  avatarUser: string;
  nameUser: string;
  titulo: string;
  pathImg: string;
}

const CardRecipe: FunctionComponent<Props> = ({
  avatarUser,
  nameUser,
  titulo,
  pathImg,
}) => {
  return (
    <IonCard className="">
      <div className="grid grid-flow-col auto-cols-max mx-1 my-1">
        <div
          className="h-8 w-8 bg-cover bg-center rounded-full"
          style={{ backgroundImage: `url( ${avatarUser} )` }}
        ></div>
        <div className="grid grid-flow-col auto-cols-max ml-2 mt-1 w-full">
          <h2 className="text-lg">{nameUser}</h2>
          <h3 className="text-lg">h</h3>
          <Link to="/signIn" className="text-purple-600 text-lg select-none">
            i
          </Link>
        </div>
      </div>
      <div className="relative flex">
        <div className="self-end absolute m-auto z-20 grid grid-flow-row rounded-md bg-black bg-opacity-50 hover:rounded-md hover:bg-purple-700 hover:bg-opacity-25 h-20 w-full">
          <IonIcon
            icon={star}
            className="place-self-end mx-auto text-white text-5xl"
          />
          <h6 className="text-white text-base md:text-xl text-center mx-1">
            {titulo}
          </h6>
        </div>
        <div
          className="h-60 sm:h-72 w-full bg-cover bg-center z-10 rounded-md"
          style={{ backgroundImage: `url( ${pathImg} )` }}
        ></div>
      </div>
      <div>hola</div>
    </IonCard>
  );
};

export default CardRecipe;
