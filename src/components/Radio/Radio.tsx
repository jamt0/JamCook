import React, { FunctionComponent } from "react";
import Text from "components/Text/Text";
import Item from "components/Item/Item";
import { IonRadio } from "@ionic/react";

type Props = {
  color?: string;
  value: string;
};

const Radio: FunctionComponent<Props> = ({
  color = "primary",
  value,
  children,
}) => {
  return (
    <Item lines="none" className="mb-4 rounded-md" color="light">
      <Text className="text-lg">{children}</Text>
      <IonRadio slot="start" color={color} value={value} />
    </Item>
  );
};

export default Radio;
