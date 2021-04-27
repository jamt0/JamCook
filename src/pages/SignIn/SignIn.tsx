import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Center from "components/Center/Center";
import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";

let defaultValues = {
  email: "",
  password: "",
};

type User = {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm<User>({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const handlerSignInButton = async (user: User) => {
    const errorSignIn = await signIn(user);
    if (errorSignIn != null) {
      setHasErrors(errorSignIn);
    } else {
      return <Redirect to="/home" />;
    }
  };

  const rulesPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"],
    },
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"],
    },
  };

  console.log("soy la page login");

  if (auth.loggedIn) {
    return <Redirect to="/home" />;
  } else {
    return (
      <Scaffold>
        <Scaffold.Header title={textos["signin_iniciar_sesion"]}>
          <Scaffold.Header.BackAction />
        </Scaffold.Header>
        <Scaffold.Content>
          <IonLoading isOpen={loading} translucent />
          {hasErrors != "" && (
            <p className="text-red-600 bg-red-100 px-6 py-3 my-2">
              {hasErrors}
            </p>
          )}
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.email}
            name="email"
            type="email"
            label={textos["campo_correo"]}
            rules={rulesEmail}
          />
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.password}
            name="password"
            type="password"
            label={textos["campo_contrasena"]}
            rules={rulesPassword}
          />
          <Center justify="end" className="mt-6">
            <ButtonLink routerLink="/forgetPassword">
              {textos["signin_olvido_contraseña"]}
            </ButtonLink>
          </Center>
        </Scaffold.Content>
        <Scaffold.Footer>
          <Button
            onClick={handleSubmit(handlerSignInButton)}
            disabled={!isValid || isSubmitting}
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
  }
};

export default SignIn;
