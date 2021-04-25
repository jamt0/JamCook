import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Center from "components/Center/Center";

let defaultValues = {
  name: "",
  email: "",
  password: "",
};

interface IUser {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const { signUp, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  /**
   *
   * @param data
   */
  const handlerSignUpButton = async (user: IUser) => {
    const errorSignUp = await signUp(user);
    if (errorSignUp != null) {
      setHasErrors(errorSignUp);
    } else {
      return <Redirect to="/home" />;
    }
  };

  const rulesNombre = {
    required: textos["campo_requerido"],
    minLength: {
      value: 3,
      message: textos["campo_nombre_min"],
    },
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"],
    },
  };

  const rulesPassword = {
    required: textos["campo_requerido"],
    minLength: {
      value: 8,
      message: textos["campo_contrasena_min"],
    },
  };

  console.log("soy la page registro");

  if (auth.loggedIn) {
    return <Redirect to="/home" />;
  } else {
    return (
      <Scaffold>
        <Scaffold.Header title={textos["signup_crear_cuenta"]}>
          <Scaffold.Header.BackAction />
        </Scaffold.Header>
        <Scaffold.Content margin="md">
          <IonLoading isOpen={loading} translucent />
          {hasErrors != "" && (
            <p className="text-red-600 bg-red-100 px-6 py-3 my-2">
              {hasErrors}
            </p>
          )}
          <Input
            control={control}
            errors={errors}
            defaultValue={defaultValues.name}
            name="name"
            type="name"
            label={textos["campo_nombre"]}
            rules={rulesNombre}
          />
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
            onClick={handleSubmit(handlerSignUpButton)}
            disabled={!isValid || isSubmitting}
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
  }
};

export default SignUp;
