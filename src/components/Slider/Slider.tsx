import React, { FunctionComponent } from "react";
import { IonItem, IonSlide, IonSlides } from "@ionic/react";
import { Link } from "react-router-dom";

interface Props {
  slidesPerView: number;
}

const Slider: FunctionComponent<Props> = ({ slidesPerView }) => {
  const slideOpts = {
    slidesPerView: slidesPerView,
    spaceBetween: 20,
  };

  const imagenes = [
    {
      pathImg: "https://picsum.photos/200/300?random=1",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=2",
      titulo: "Tacos Mexicanos",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=3",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=4",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=5",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=6",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
    {
      pathImg: "https://picsum.photos/200/300?random=7",
      titulo: "Tacos Mexicanos de Carnitas Asadas",
    },
  ];

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
                <div className="grid grid-flow-row auto-rows-max w-full">
                  <div className="h-40 w-full bg-black bg-opacity-25 z-0 absolute"></div>
                  <div
                    className="h-40 w-full bg-cover bg-center z-10"
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
