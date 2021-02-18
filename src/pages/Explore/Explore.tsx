import {
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Searcher from "../../components/Searcher/Searcher";
import GridImages from "../../components/GridImages/GridImages";

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

const Explore: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col pt-8 text-left sm:text-center text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>Explorar</h6>
        </div>
        <Searcher placeHolder={"¿Qué tipo de plato te gustaria?"} />
        <GridImages imagenes={imagenes} />
      </IonContent>
    </IonPage>
  );
};

export default Explore;
