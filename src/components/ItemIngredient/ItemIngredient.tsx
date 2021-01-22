import { IonSearchbar } from "@ionic/react";
import React, { FunctionComponent } from "react";

interface Props {
  cantidadPorcion: string;
  name: string;
  pathImg: string;
}

const ItemIngredient: FunctionComponent<Props> = ({
  cantidadPorcion,
  name,
  pathImg,
}) => {
  return (
    <div className="grid grid-flow-col auto-cols-max p-2 bg-gray-100 mb-2 rounded-md">
      <div
        className="h-12 w-12 bg-cover bg-center mr-4"
        style={{ backgroundImage: `url( ${pathImg} )` }}
      ></div>
      <div>
        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="text-sm">{cantidadPorcion + " Unidades"}</h3>
      </div>
    </div>
  );
};

export default ItemIngredient;
