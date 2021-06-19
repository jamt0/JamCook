import { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Text } from "UI";

type Props = {
  color?: string;
  align?: "right" | "center" | "left" | undefined;
  routerLink?: string;
  onClick?: (e: any) => void;
};

const ButtonLink: FunctionComponent<Props> = ({
  color = "primary",
  ...props
}) => (
  <Text color={color} align={props.align} onClick={props.onClick}>
    {props.routerLink ? (
      <Link to={props.routerLink}>{props.children}</Link>
    ) : (
      <Fragment>{props.children}</Fragment>
    )}
  </Text>
);
export default ButtonLink;
