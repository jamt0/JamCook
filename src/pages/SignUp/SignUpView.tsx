import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import Error from "components/Error/Error";
import Center from "components/Center/Center";
import Loading from "components/Loading/Loading";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { TUserSignUp } from "utils/types";

type Props = {
  textos: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: TUserSignUp;
  handlerSignUpButton: (user: TUserSignUp) => void;
};

const SignUpView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.signup_crear_cuenta}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content margin="md">
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.name}
        name="name"
        type="name"
        label={props.textos.campo_nombre}
        rules={props.rules.rulesName}
      />
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
      <Center direction="col" className="mt-8">
        <Text>{props.textos.signup_acepta_nuestros}</Text>
        <ButtonLink routerLink="/terminosYCondiciones">
          {props.textos.terminos_condiciones}
        </ButtonLink>
        <Text>{props.textos.y}</Text>
        <ButtonLink routerLink="/politicaDePrivacidad">
          {props.textos.politica_privacidad}
        </ButtonLink>
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSignUpButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.textos.signup_crear_cuenta}
      </Button>
      <Center className="py-2">
        <Text className="mr-1">{props.textos.signup_tiene_cuenta}</Text>
        <ButtonLink routerLink="/signIn">
          {props.textos.signin_iniciar_sesion}
        </ButtonLink>
      </Center>
    </Scaffold.Footer>
  </Scaffold>
);
export default SignUpView;
