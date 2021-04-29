import React, { FunctionComponent } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Center from "components/Center/Center";
import Error from "components/Error/Error";
import Loading from "components/Loading/Loading";
import { IonLoading } from "@ionic/react";
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

const SignIn: FunctionComponent<Props> = ({
  textos,
  loading,
  errores,
  formHook,
  rules,
  defaultValues,
  handlerSignInButton,
}) => {
  return (
    <Scaffold>
      <Scaffold.Header title={textos["signin_iniciar_sesion"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <Loading isOpen={loading} />
        <IonLoading isOpen={loading} translucent />
        {errores != "" && <Error>{errores}</Error>}
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
        <Center justify="end" className="mt-6">
          <ButtonLink routerLink="/forgetPassword">
            {textos["signin_olvido_contraseña"]}
          </ButtonLink>
        </Center>
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={formHook.handleSubmit(handlerSignInButton)}
          disabled={!formHook.isValid || formHook.isSubmitting}
        >
          {textos["signin_iniciar_sesion"]}
        </Button>
        <Center className="py-2">
          <Text className="mr-1">{textos["signin_no_tiene_cuenta"]}</Text>
          <ButtonLink routerLink="/signUp">
            {textos["signup_registrate"]}
          </ButtonLink>
        </Center>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default SignIn;
