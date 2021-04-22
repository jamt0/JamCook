import { IonCheckbox } from "@ionic/react";
import React, { FunctionComponent, useState } from "react";
import Center from "../Center/Center";
import Counter from "../Counter/Counter";
import ImageRecipe from "../ImageRecipe/ImageRecipe";

interface Props {
  cantidadPorcion: string;
  name: string;
  pathImg: string;
  withCheck?: boolean;
  withCounter?: boolean;
}

const ItemIngredient: FunctionComponent<Props> = ({
  cantidadPorcion,
  name,
  pathImg,
  withCheck = false,
  withCounter = false
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [porciones, setPorciones] = useState(1);

  const handlerClickItem = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setIsSelect(true);
  };

  const handlerClickCheck = (e: any) => {
    e.preventDefault();
    setIsSelect(!isSelect);
  };

  return (
    <div className="grid grid-flow-row p-2 bg-gray-100 mb-2 rounded-md w-full">
      <div className="flex">
        <div
          className="grid grid-flow-col auto-cols-max w-full"
          onClick={handlerClickItem}
        >
          <ImageRecipe src={pathImg} height={12} width={12} />
          <Center className="ml-4" direccion="col" eje="y">
            <h2 className="font-bold text-sm">{name}</h2>
            <h3 className="text-sm">{cantidadPorcion + " Unidades"}</h3>
          </Center>
        </div>
        {withCheck &&
        <div onClick={handlerClickCheck} className="h-full px-2">
          <Center direccion="row" className="h-full">
            <IonCheckbox
              color="tertiary"
              checked={isSelect}
              slot="end"
              className="z-20"
            ></IonCheckbox>
          </Center>
        </div>}
      </div>
      {isOpen && withCounter &&
      <div className="mt-2">
        <Counter porciones={porciones} setPorciones={setPorciones}/>
      </div>}
    </div>
  );
};

export default ItemIngredient;