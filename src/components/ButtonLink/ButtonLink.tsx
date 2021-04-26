import { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Text from "components/Text/Text";
import React from "react";

type Props = {
  color?: string;
  align?: "right" | "center" | "left" | undefined;
  routerLink?: string;
  onClick?: (e: any) => void;
};

const ButtonLink: FunctionComponent<Props> = ({
  color="primary",
  align,
  routerLink,
  children,
  onClick,
}) => {

  //Falta añadir una forma de hacer replace, ademas añadir que pueda ser un boton, asi reducir funciones 
  return (
    <Text color={color} align={align} onClick={onClick}>
      {routerLink ? <Link to={routerLink}>{children}</Link>: <Fragment>{children}</Fragment>}
    </Text>
  );
};

export default ButtonLink;
