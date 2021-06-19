import { FunctionComponent } from "react";
import { Text } from "UI";

type Props = {};

const ErrorText: FunctionComponent<Props> = (props) => (
  <Text className="mx-6" color="danger">
    {props.children}
  </Text>
);
export default ErrorText;
