import React, { FunctionComponent, useState } from "react";
import ItemIngredientView from "layouts/ItemIngredient/ItemIngredientView";

type TIngredient = {
  amount: string;
  name: string;
  src: string;
};

interface Props {
  ingredient: TIngredient;
  check?: boolean;
  counter?: boolean;
}

const ItemIngredient: FunctionComponent<Props> = ({
  ingredient,
  check = false,
  counter = false,
}) => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(false);
  const [portions, setPortions] = useState(1);

  const handlerClickItem = (e: any) => {
    e.preventDefault();
    setOpen(!open);
    setSelect(true);
  };

  const handlerClickCheck = (e: any) => {
    e.preventDefault();
    setSelect(!select);
  };

  return (
    <ItemIngredientView
      ingredient={ingredient}
      check={check}
      counter={counter}
      open={open}
      select={select}
      portions={portions}
      setPortions={setPortions}
      handlerClickCheck={handlerClickCheck}
      handlerClickItem={handlerClickItem}
    />
  );
};

export default ItemIngredient;
