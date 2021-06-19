import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type Props = React.ComponentProps<any> & {
  routerLink?: string;
  children: React.ReactNode;
};

const CardContent: FunctionComponent<Props> = (props: Props) => (
  <Link to={props.routerLink} className="w-full">
    {props.children}
  </Link>
);
export default CardContent;
