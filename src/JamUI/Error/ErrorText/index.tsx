import React, { FunctionComponent } from "react";
import { Text } from "JamUI";

type Props = {};

const ErrorText: FunctionComponent<Props> = (props) => (
  <Text className="mx-6" color="danger">
    {props.children}
  </Text>
);
export default ErrorText;
