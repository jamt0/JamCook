import React, { FunctionComponent } from "react";
import {
  star,
  timerOutline,
  nutritionOutline,
  starOutline,
  arrowRedoOutline,
  bookmarkOutline,
  heartOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { IonButton, IonButtons, IonCard, IonIcon } from "@ionic/react";
import ImageRecipe from "../ImageRecipe/ImageRecipe";

interface Props {
  avatarUser: string;
  nameUser: string;
  titulo: string;
  pathImg: string;
  meGusta: string;
  valoracion: number[];
}

const CardRecipe: FunctionComponent<Props> = ({
  avatarUser,
  nameUser,
  titulo,
  pathImg,
  valoracion,
  meGusta,
}) => {
  const handlerLikeButton = (e: any) => {
    e.preventDefault();
  };
  const handlerShareButton = (e: any) => {
    e.preventDefault();
  };
  const handlerFavButton = (e: any) => {
    e.preventDefault();
  };

  return (
    <IonCard>
      <Link to="/recipe" className="w-full">
        <div className="grid grid-flow-col mx-2 my-1">
          <div className="flex flex-row">
            <div
              className="h-8 w-8 bg-cover bg-center rounded-full"
              style={{ backgroundImage: `url( ${avatarUser} )` }}
            ></div>
            <h2 className="text-lg ml-2 mt-1">{nameUser}</h2>
          </div>
          <div className="justify-self-end grid grid-flow-col mt-1">
            <IonIcon
              icon={nutritionOutline}
              className="text-black text-base mt-1 mr-1"
            />
            <h3 className="text-lg mr-3">8</h3>
            <IonIcon
              icon={timerOutline}
              className="text-black text-base mt-1 mr-1"
            />
            <h3 className="text-lg">25'</h3>
          </div>
        </div>
        <ImageRecipe pathImg={pathImg} height={60}>
          <div className="flex flex-row">
            {valoracion.map((element, index) => {
              return (
                <IonIcon
                  key={index}
                  icon={element == 1 ? star : starOutline}
                  className="text-white text-xl self-end ml-1"
                />
              );
            })}
          </div>
          <h6 className="text-white text-base md:text-xl text-left mx-1 mt-1">
            {titulo}
          </h6>
        </ImageRecipe>
        <div className="grid grid-flow-col mx-2 my-1 py-1">
          <div className="flex flex-row">
            <IonButtons slot="start">
              <IonButton onClick={handlerShareButton}>
                <IonIcon
                  icon={arrowRedoOutline}
                  className="text-black text-4xl my-auto -ml-2 -mr-2"
                />
              </IonButton>
            </IonButtons>
            <IonButtons slot="start">
              <IonButton onClick={handlerLikeButton}>
                <IonIcon
                  icon={heartOutline}
                  className="text-black text-4xl my-auto -ml-2 -mr-1"
                />
              </IonButton>
            </IonButtons>
            <h3 className="text-xl my-px inline-block align-baseline pt-1">
              {meGusta}
            </h3>
          </div>
          <div className="justify-self-end grid grid-flow-col">
            <IonButtons slot="start">
              <IonButton onClick={handlerFavButton}>
                <IonIcon
                  icon={bookmarkOutline}
                  className="text-black text-4xl -ml-2 -mr-2"
                />
              </IonButton>
            </IonButtons>
          </div>
        </div>
      </Link>
    </IonCard>
  );
};

export default CardRecipe;
