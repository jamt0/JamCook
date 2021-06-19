import { FunctionComponent } from "react";
import RoutesPath from "routes";
import { TUserSignIn } from "utils/types";
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
  loading: boolean;
  errores: any;
  formHook: any;
  rules: any;
  defaultValues: TUserSignIn;
  handlerSignInButton: (user: TUserSignIn) => void;
};

const SignIn: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.signin_iniciar_sesion}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.texts.campo_correo}
        rules={props.rules.rulesEmail}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.password}
        name="password"
        type="password"
        label={props.texts.campo_contrasena}
        rules={props.rules.rulesPassword}
      />
      <Center justify="end" className="mt-6">
        <ButtonLink routerLink={RoutesPath.forgetPassword}>
          {props.texts.signin_olvido_contraseña}
        </ButtonLink>
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSignInButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.signin_iniciar_sesion}
      </Button>
      <Center className="py-2">
        <Text className="mr-1">{props.texts.signin_no_tiene_cuenta}</Text>
        <ButtonLink routerLink={RoutesPath.signUp}>
          {props.texts.signup_registrate}
        </ButtonLink>
      </Center>
    </Scaffold.Footer>
  </Scaffold>
);
export default SignIn;
