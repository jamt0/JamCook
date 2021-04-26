import Item from "components/Item/Item";
import Text from "components/Text/Text";
import React, { FunctionComponent } from "react";

interface Props {}

const ItemStep: FunctionComponent<Props> = ({ children }) => {
  return (
    <Item color="light" className="w-full mb-2 rounded-md">
      <Text className="my-2">
        {children}
      </Text>
    </Item>
  );
};

export default ItemStep;
