import React, { FunctionComponent } from "react";
import Text from "components/Text/Text";

type Props = {};

const ErrorText: FunctionComponent<Props> = (props) => (
  <Text className="mx-6" color="danger">
    {props.children}
  </Text>
);
export default ErrorText;
