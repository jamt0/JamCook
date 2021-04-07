import {
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { checkmarkSharp } from "ionicons/icons";
import React from "react";

import ItemIngredient from "../../components/ItemIngredient/ItemIngredient";
import Scaffold from "../../components/Scaffold/Scaffold";
import Searcher from "../../components/Searcher/Searcher";
import {useHistory} from 'react-router';

const imagenes = [
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=1",
    name: "Tomate",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=2",
    name: "Cebolla",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=3",
    name: "Znahoria",
    canridadPorcion: "1 Unidad",
  },
  {
    pathImg: "https://picsum.photos/200/300?random=4",
    name: "TomLechugaate",
    canridadPorcion: "1 Unidad",
  },
];

const FoodBasketAdd: React.FC = ( ) => {
  
  const history = useHistory();

  const handlerAddIngredient = (e: any) => {
    e.preventDefault();
    history.push("/home/foodBasket");
  };

  return (
    <Scaffold tituloHeader="Agrega Ingredientes" >
      <Searcher placeHolder={"¿Qué ingrediente buscas?"} />
      <div className="px-2 mb-20">
        {imagenes.map((imagen, index) => {
          return (
            <ItemIngredient
              pathImg={imagen.pathImg}
              cantidadPorcion={imagen.canridadPorcion}
              name={imagen.name}
              withCounter={true}
              withCheck={true}
              key={index}
            />
          );
        })}
      </div>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={handlerAddIngredient}>
          <IonIcon icon={checkmarkSharp} />
        </IonFabButton>
      </IonFab>
    </Scaffold>
  );
};

export default FoodBasketAdd;
