import { IonItemDivider } from "@ionic/react";
import React, { FunctionComponent } from "react";
import { Center, Text, Button } from "JamUI";

type Props = {
  portions: number;
  disabled: boolean;
  handlerPlus: (e: any) => void;
  handlerSubtract: (e: any) => void;
};

const CounterView: FunctionComponent<Props> = ({
  portions,
  disabled,
  handlerPlus,
  handlerSubtract,
}) => {
  return (
    <Center direction="row">
      <IonItemDivider
        className={"ion-no-padding h-12 w-14 rounded-l-md"}
        mode="md"
      >
        <Button
          color="primary"
          className="w-full h-full"
          onClick={handlerSubtract}
          disabled={disabled}
        >
          <Text color="light" align="center">
            {"<"}
          </Text>
        </Button>
      </IonItemDivider>
      <IonItemDivider
        color="light"
        className="ion-no-padding w-full h-12"
        mode="md"
      >
        <div className="w-full">
          <Text color="medium" align="center">
            {portions}
          </Text>
        </div>
      </IonItemDivider>
      <IonItemDivider
        className="ion-no-padding h-12 w-14 rounded-r-md"
        mode="md"
      >
        <Button color="primary" className="w-full h-full" onClick={handlerPlus}>
          <Text color="light" align="center">
            {">"}
          </Text>
        </Button>
      </IonItemDivider>
    </Center>
  );
};

export default CounterView;
