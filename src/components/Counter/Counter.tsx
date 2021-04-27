import { IonItemDivider } from "@ionic/react";
import React, { FunctionComponent, useEffect, useState } from "react";
import Center from "components/Center/Center";
import Text from "components/Text/Text";
import Button from "components/Button/Button";

interface Props {
  porciones: number;
  setPorciones: (porciones: number) => void;
}

const Counter: FunctionComponent<Props> = ({ porciones, setPorciones }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [classPorciones, setClassPorciones] = useState(" ");

  useEffect(() => {
    if (porciones == 1) {
      setClassPorciones(" opacity-25 ");
      setIsDisabled(true);
    } else {
      setClassPorciones(" ");
      setIsDisabled(false);
    }
  }, [porciones]);

  const handlerSuma = (e: any) => {
    setPorciones(porciones + 1);
  };

  const handlerResta = (e: any) => {
    setPorciones(porciones - 1);
  };
  return (
    <Center direction="row">
      <IonItemDivider
        className= {"ion-no-padding h-12 w-14 rounded-l-md"}
        mode="md"
      >
        <Button
          color="primary"
          className="w-full h-full"
          onClick={handlerResta}
          disabled={isDisabled}
        >
          <Text color="light" align="center">
            {"<"}
          </Text>
        </Button>
      </IonItemDivider>
      <IonItemDivider color="light" className="ion-no-padding w-full h-12" mode="md">
        <div className="w-full">
          <Text color="medium" align="center">
            {porciones}
          </Text>
        </div>
      </IonItemDivider>
      <IonItemDivider
        className="ion-no-padding h-12 w-14 rounded-r-md"
        mode="md"
      >
        <Button color="primary" className="w-full h-full" onClick={handlerSuma}>
          <Text color="light" align="center">
            {">"}
          </Text>
        </Button>
      </IonItemDivider>
    </Center>
  );
};

export default Counter;
