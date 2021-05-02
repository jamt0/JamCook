import React, { FunctionComponent } from "react";
import Item from "components/Item/Item";
import Text from "components/Text/Text";

interface Props {}

const ItemStep: FunctionComponent<Props> = (props) => (
  <Item color="light" className="w-full mb-2 rounded-md">
    <Text className="my-2">{props.children}</Text>
  </Item>
);
export default ItemStep;
