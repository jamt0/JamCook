import { IonIcon } from "@ionic/react";
import React, { FunctionComponent } from "react";
import { fastFoodOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import ImageRecipe from "../ImageRecipe/ImageRecipe";

interface Props {
  imagenes: {
    titulo: string;
    pathImg: string;
    icon: string;
  }[];
}

const GridImages: FunctionComponent<Props> = ({imagenes}) => {
  return (
    <div className="grid gap-4 grid-cols-2 mx-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {imagenes.map((imagen, index) => {
        return (
          <Link to="/recipes" className="w-full" key={index}>
            <div className="relative">
              <div className="absolute m-auto z-20 grid grid-flow-row rounded-md bg-black bg-opacity-50 hover:bg-purple-700 hover:bg-opacity-25 h-full w-full">
                <IonIcon
                  icon={fastFoodOutline}
                  className="place-self-end mx-auto text-white text-5xl"
                />
                <h6 className="text-white text-base md:text-xl text-center mx-1">
                  {imagen.titulo}
                </h6>
              </div>
              <ImageRecipe pathImg={imagen.pathImg} height={"40"}/>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GridImages;
