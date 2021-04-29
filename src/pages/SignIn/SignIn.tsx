import React, { useState } from "react";
import SignInView from "pages/SignIn/SignInView";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword } from "utils/rulesValidation";
import { TUserSignIn } from "utils/types";

const SignIn: React.FC = () => {
  const { signIn, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");

  let defaultValues = {
    email: "",
    password: "",
  };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange",
  });

  const handlerSignInButton = async (user: TUserSignIn) => {
    const errorSignIn = await signIn(user);
    if (errorSignIn != null) {
      setErrores(errorSignIn);
    } else {
      return <Redirect to="/home" />;
    }
  };

  const rules = {
    rulesEmail: rulesEmail(textos),
    rulesPassword: rulesPassword(textos),
  };

  console.log("soy la page login");

  return (
    <SignInView
      rules={rules}
      handlerSignInButton={handlerSignInButton}
      textos={textos}
      errores={errores}
      loading={loading}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
      defaultValues={defaultValues}
    />
  );
};

export default SignIn;
