import { IonIcon } from "@ionic/react";
import React, { FunctionComponent } from "react";
import { basketOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

interface Props {}

const imagenes = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos de Carnitas",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    icon: "Tacos Mexicanos",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=5",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=6",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=7",
    icon: "Tacos Mexicanos de Carnitas Asadas",
    titulo: "Tacos Mexicanos",
  },
];

const GridImages: FunctionComponent<Props> = ({}) => {
  return (
    <div className="grid gap-4 grid-cols-2 mx-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {imagenes.map((imagen, index) => {
        return (
          <Link to="/signIn" className="w-full">
            <div className="relative" key={index}>
              <div className="h-40 sm:h-60 w-full bg-black bg-opacity-50 z-20 absolute rounded-md"></div>
              <div className="w-full h-full absolute z-30 flex flex-row">
                <div className="m-auto grid grid-flow-row">
                  <IonIcon
                    icon={basketOutline}
                    className="place-self-center text-white text-5xl"
                  />
                  <h6 className="text-white text-base md:text-xl text-center mx-1">
                    {imagen.titulo}
                  </h6>
                </div>
              </div>
              <div
                className="h-40 sm:h-60 w-full bg-cover bg-center z-10 rounded-md"
                style={{ backgroundImage: `url( ${imagen.pathImg} )` }}
              ></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default GridImages;
