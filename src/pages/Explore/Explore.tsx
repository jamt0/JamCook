import {
  IonContent,
  IonPage,
} from "@ionic/react";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Buscador from "../../components/Buscador/Buscador";
import GridImages from "../../components/GridImages/GridImages";


const Explore: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col pt-8 text-left sm:text-center text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>Explorar</h6>
        </div>
        <Buscador placeHolder={"¿Qué plato te gustaria?"} />
        <GridImages />
      </IonContent>
    </IonPage>
  );
};

export default Explore;
