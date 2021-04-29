import { IonCheckbox, IonLabel, IonText } from "@ionic/react";
import { FunctionComponent, useState } from "react";
import Item from "components/Item/Item";
import Counter from "layouts/Counter/Counter";
import Image from "components/Image/Image";

type TIngredient = {
  amount: string;
  name: string;
  src: string;
};

type Props = {
  ingredient: TIngredient;
  check?: boolean;
  counter?: boolean;
  open: boolean;
  select: boolean;
  portions: number;
  handlerClickCheck: (e: any) => void;
  handlerClickItem: (e: any) => void;
  setPortions: (e: any) => void;
};

const ItemIngredientView: FunctionComponent<Props> = ({
  ingredient,
  check = false,
  counter = false,
  open,
  select,
  portions,
  setPortions,
  handlerClickCheck,
  handlerClickItem,
}) => {
  return (
    <div className="flex flex-col my-2">
      <div className="relative flex flex-row">
        <Item
          color="light"
          onClick={handlerClickItem}
          className="w-full rounded-md"
        >
          <Image src={ingredient.src} height={12} width={12} rounded="sm" />
          <IonLabel className="ion-text-wrap ml-2 my-4">
            <IonText color="dark">
              <p>{ingredient.name}</p>
            </IonText>
            <IonText color="medium">
              <p>{ingredient.amount + " Unidades"}</p>
            </IonText>
          </IonLabel>
        </Item>
        {check && (
          <div className="flex h-full w-full absolute items-center justify-end pr-3">
            <IonCheckbox
              mode="md"
              color="primary"
              checked={select}
              slot="end"
              onClick={handlerClickCheck}
            />
          </div>
        )}
      </div>
      {open && counter && (
        <Item color="light" className="pb-2">
          <Counter portions={portions} setPortions={setPortions} />
        </Item>
      )}
    </div>
  );
};

export default ItemIngredientView;
