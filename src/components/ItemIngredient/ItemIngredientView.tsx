import React, { FunctionComponent } from "react";
import { IonCheckbox } from "@ionic/react";
import { Item, Image, Label, Text } from "JamUI";
import { Counter } from "components";
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

const ItemIngredientView: FunctionComponent<Props> = (props) => (
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
        <Label className="ion-text-wrap ml-2 my-4">
          <Text color="dark">
            <p>{props.ingredient.name}</p>
          </Text>
          <Text color="medium">
            <p>{props.ingredient.amount + " Unidades"}</p>
          </Text>
        </Label>
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
