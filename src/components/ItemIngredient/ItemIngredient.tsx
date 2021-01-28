import React, { FunctionComponent } from "react";
import Center from "../Center/Center";
import ImageRecipe from "../ImageRecipe/ImageRecipe";

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
      <ImageRecipe pathImg={pathImg} height="12" width="12" />
      <Center className="ml-4" direccion="col" eje="y">
        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="text-sm">{cantidadPorcion + " Unidades"}</h3>
      </Center>
    </div>
  );
};

export default ItemIngredient;
