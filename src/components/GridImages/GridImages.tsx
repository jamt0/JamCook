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
          <Link to="/signIn" className="w-full" key={index}>
            <div className="relative">
              <div className="absolute m-auto z-20 grid grid-flow-row rounded-md bg-black bg-opacity-50 hover:rounded-md hover:bg-purple-700 hover:bg-opacity-25 h-full w-full">
                <IonIcon
                  icon={basketOutline}
                  className="place-self-end mx-auto text-white text-5xl"
                />
                <h6 className="text-white text-base md:text-xl text-center mx-1">
                  {imagen.titulo}
                </h6>
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
