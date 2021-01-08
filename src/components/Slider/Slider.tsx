import React, { FunctionComponent } from "react";
import { IonSlide, IonSlides } from "@ionic/react";
import { Link } from "react-router-dom";

interface Props {
  slidesPerView: number;
  imagenes: {
    titulo: string;
    pathImg: string;
  }[];
}

const Slider: FunctionComponent<Props> = ({ slidesPerView, imagenes }) => {
  const slideOpts = {
    slidesPerView: slidesPerView,
    spaceBetween: 20,
  };

  return (
    <div>
      <div className="flex justify-between">
        <h5 className="text-purple-600 text-lg font-bold">Recetas Nuevas</h5>
        <Link to="/signIn" className="text-purple-600 text-lg select-none">
          Ver Todas
        </Link>
      </div>
      <IonSlides options={slideOpts} className="z-0 my-4">
        {imagenes.map((imagen, index) => {
          return (
            <IonSlide key={index}>
              <Link to="/signIn" className="w-full">
                <div className="grid grid-flow-row auto-rows-max w-full relative">
                  <div className="h-40 w-full hover:bg-purple-700 hover:bg-opacity-25 z-20 absolute"></div>
                  <div
                    className="h-40 w-full bg-cover bg-center z-10 bg-gray-500 bg-opacity-50"
                    style={{ backgroundImage: `url( ${imagen.pathImg} )` }}
                  ></div>
                  <h6 className="w-full text-left mt-2 text-base font-bold text-gray-600 ">
                    {imagen.titulo}
                  </h6>
                </div>
              </Link>
            </IonSlide>
          );
        })}
      </IonSlides>
    </div>
  );
};

export default Slider;
