import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Props = React.ComponentProps<any> & {
  routerLink?: string;
  children: React.ReactNode;
};

const CardContent: FunctionComponent<Props> = ({ routerLink, children }: Props) => {
  return (
    <Link to={routerLink} className="w-full">
        {children}
    </Link>
  );
};

export default CardContent;