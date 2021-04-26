import { IonCheckbox, IonLabel, IonText } from "@ionic/react";
import { FunctionComponent, useState } from "react";
import Item from "components/Item/Item";
import Counter from "components/Counter/Counter";
import Image from "components/Image/Image";

interface Props {
  amount: string;
  name: string;
  src: string;
  check?: boolean;
  counter?: boolean;
}

const ItemIngredient: FunctionComponent<Props> = ({
  amount,
  name,
  src,
  check = false,
  counter = false,
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
    <div className="flex flex-col my-2">
      <div className="relative flex flex-row">
        <Item color="light" onClick={handlerClickItem} className="w-full rounded-md">
          <Image src={src} height={12} width={12} rounded/>
          <IonLabel className="ion-text-wrap ml-2 my-4">
            <IonText color="dark">
              <p>{name}</p>
            </IonText>
            <IonText color="medium">
              <p>{amount + " Unidades"}</p>
            </IonText>
          </IonLabel>
        </Item>
        {check && (
          <div className="flex h-full w-full absolute items-center justify-end pr-3">
            <IonCheckbox
              mode="md"
              color="primary"
              checked={isSelect}
              slot="end"
              onClick={handlerClickCheck}
            />
          </div>
        )}
      </div>
      {isOpen && counter && (
        <Item color="light" className="pb-2">
          <Counter porciones={porciones} setPorciones={setPorciones} />
        </Item>
      )}
    </div>
  );
};

export default ItemIngredient;
