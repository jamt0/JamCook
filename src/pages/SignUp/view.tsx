import { FunctionComponent } from "react";
import { TUserSignUp } from "models";
import namesRoutes from "routes/names";
import {
  Scaffold,
  Input,
  Loading,
  Button,
  ErrorBox,
  Center,
  ButtonLink,
  Text,
} from "UI";

type Props = {
  texts: any;
  // loading: boolean;
  // errores: string;
  // formHook: any;
  // rules: any;
  defaultValues: TUserSignUp;
  // handlerSignUpButton: (user: TUserSignUp) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <div>Hola</div>
);
export default View;
