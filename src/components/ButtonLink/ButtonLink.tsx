import React, { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Text from "components/Text/Text";

type Props = {
  color?: string;
  align?: "right" | "center" | "left" | undefined;
  routerLink?: string;
  onClick?: (e: any) => void;
};

const ButtonLink: FunctionComponent<Props> = ({
  color = "primary",
  align,
  routerLink,
  onClick,
  children,
}) => {
  return (
    <Text color={color} align={align} onClick={onClick}>
      {routerLink ? (
        <Link to={routerLink}>{children}</Link>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Text>
  );
};

export default ButtonLink;
