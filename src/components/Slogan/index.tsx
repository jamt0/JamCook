import React, { FunctionComponent } from "react";
import { Text } from "JamUI";

type Props = {
  color?: string;
};

const Slogan: FunctionComponent<Props> = (props) => (
  <Text color={props.color} className="text-center text-xl md:text-2xl">
    <h2>{props.children}</h2>
  </Text>
);
export default Slogan;
