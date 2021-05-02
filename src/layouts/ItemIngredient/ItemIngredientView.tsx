import { IonCheckbox, IonLabel, IonText } from "@ionic/react";
import { FunctionComponent, useState } from "react";
import Item from "components/Item/Item";
import Counter from "layouts/Counter/Counter";
import Image from "components/Image/Image";
import { TIngredient } from "utils/types";

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

const ItemIngredientView: FunctionComponent<Props> = ({ ...props }) => (
  <div className="flex flex-col my-2">
    <div className="relative flex flex-row">
      <Item
        color="light"
        onClick={props.handlerClickItem}
        className="w-full rounded-md"
      >
        <Image
          src={props.ingredient.pathIngredientImage}
          height={12}
          width={12}
          rounded="sm"
        />
        <IonLabel className="ion-text-wrap ml-2 my-4">
          <IonText color="dark">
            <p>{props.ingredient.name}</p>
          </IonText>
          <IonText color="medium">
            <p>{props.ingredient.amount + " Unidades"}</p>
          </IonText>
        </IonLabel>
      </Item>
      {props.check && (
        <div className="flex h-full w-full absolute items-center justify-end pr-3">
          <IonCheckbox
            mode="md"
            color="primary"
            checked={props.select}
            slot="end"
            onClick={props.handlerClickCheck}
          />
        </div>
      )}
    </div>
    {props.open && props.counter && (
      <Item color="light" className="pb-2">
        <Counter portions={props.portions} setPortions={props.setPortions} />
      </Item>
    )}
  </div>
);
export default ItemIngredientView;
