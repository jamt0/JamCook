import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import React, { FunctionComponent } from "react";
import Center from "../Center/Center";

interface Props {
  estrellas: boolean[];
  tamaño: string;
  handlerValoracion?: (e: any, index: number) => void;
}

const Rating: FunctionComponent<Props> = (
  { estrellas, handlerValoracion, tamaño},
) => {

    if (handlerValoracion) {
        return (
            <Center direccion="row">
              {estrellas.map((estrella, index) => {
                return (
                  <IonButtons
                    slot="icon-only"
                    className={"w-" + tamaño + " h-" + tamaño}
                    key={index}
                  >
                    <IonButton
                      onClick={(e) => handlerValoracion(e, index)}
                      className={"w-" + tamaño + " h-" + tamaño}
                    >
                      <IonIcon
                        icon={estrella ? star : starOutline}
                        className={"text-purple-500 w-" + tamaño + " h-" + tamaño}
                      />
                    </IonButton>
                  </IonButtons>
                );
              })}
            </Center>
          );
    }else{
        return(
            <Center direccion="row">
              {estrellas.map((estrella, index) => {
                return (
                    <IonIcon
                    key={index}
                    icon={estrella ? star : starOutline}
                    className={"text-purple-500 w-" + tamaño + " h-" + tamaño}
                    />
                );
              })}
            </Center>
        );
    }
  
};

export default Rating;
