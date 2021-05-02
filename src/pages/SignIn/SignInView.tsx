import React, { FunctionComponent } from "react";
import Text from "components/Text/Text";
import Error from "components/Error/Error";
import Input from "components/Input/Input";
import Center from "components/Center/Center";
import Button from "components/Button/Button";
import Loading from "components/Loading/Loading";
import Scaffold from "components/Scaffold/Scaffold";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { TUserSignIn } from "utils/types";

type Props = {
  textos: any;
  loading: boolean;
  errores: any;
  formHook: any;
  rules: any;
  defaultValues: TUserSignIn;
  handlerSignInButton: (user: TUserSignIn) => void;
};

const SignIn: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.signin_iniciar_sesion}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.textos.campo_correo}
        rules={props.rules.rulesEmail}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.password}
        name="password"
        type="password"
        label={props.textos.campo_contrasena}
        rules={props.rules.rulesPassword}
      />
      <Center justify="end" className="mt-6">
        <ButtonLink routerLink="/forgetPassword">
          {props.textos.signin_olvido_contraseña}
        </ButtonLink>
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSignInButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.textos.signin_iniciar_sesion}
      </Button>
      <Center className="py-2">
        <Text className="mr-1">{props.textos.signin_no_tiene_cuenta}</Text>
        <ButtonLink routerLink="/signUp">
          {props.textos.signup_registrate}
        </ButtonLink>
      </Center>
    </Scaffold.Footer>
  </Scaffold>
);
export default SignIn;
