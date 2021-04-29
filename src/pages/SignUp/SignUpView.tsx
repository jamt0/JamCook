import React, { FunctionComponent } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Center from "components/Center/Center";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";
import { TUserSignUp } from "utils/types";

type Props = {
  textos: any;
  loading: boolean;
  errores: any;
  formHook: any;
  rules: any;
  defaultValues: TUserSignUp;
  handlerSignUpButton: (user: TUserSignUp) => void;
};

const SignUpView: FunctionComponent<Props> = ({
  textos,
  loading,
  errores,
  formHook,
  rules,
  defaultValues,
  handlerSignUpButton,
}) => {
  return (
    <Scaffold>
      <Scaffold.Header title={textos["signup_crear_cuenta"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content margin="md">
        <Loading isOpen={loading} />
        {errores != "" && <Error>{errores}</Error>}
        <Input
          control={formHook.control}
          errors={formHook.errors}
          defaultValue={defaultValues.name}
          name="name"
          type="name"
          label={textos["campo_nombre"]}
          rules={rules.rulesName}
        />
        <Input
          control={formHook.control}
          errors={formHook.errors}
          defaultValue={defaultValues.email}
          name="email"
          type="email"
          label={textos["campo_correo"]}
          rules={rules.rulesEmail}
        />
        <Input
          control={formHook.control}
          errors={formHook.errors}
          defaultValue={defaultValues.password}
          name="password"
          type="password"
          label={textos["campo_contrasena"]}
          rules={rules.rulesPassword}
        />
        <Center direction="col" className="mt-8">
          <Text>{textos["signup_acepta_nuestros"]}</Text>
          <ButtonLink routerLink="/terminosYCondiciones">
            {textos["terminos_condiciones"]}
          </ButtonLink>
          <Text>{textos["y"]}</Text>
          <ButtonLink routerLink="/politicaDePrivacidad">
            {textos["politica_privacidad"]}
          </ButtonLink>
        </Center>
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={formHook.handleSubmit(handlerSignUpButton)}
          disabled={!formHook.isValid || formHook.isSubmitting}
        >
          {textos["signup_crear_cuenta"]}
        </Button>
        <Center className="py-2">
          <Text className="mr-1">{textos["signup_tiene_cuenta"]}</Text>
          <ButtonLink routerLink="/signIn">
            {textos["signin_iniciar_sesion"]}
          </ButtonLink>
        </Center>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default SignUpView;
