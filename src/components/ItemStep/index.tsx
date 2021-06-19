import { FunctionComponent } from "react";
import { Item, Text } from "UI";

interface Props {}

const ItemStep: FunctionComponent<Props> = (props) => (
  <Item color="light" className="w-full mb-2 rounded-md">
    <Text className="my-2">{props.children}</Text>
  </Item>
);
export default ItemStep;
