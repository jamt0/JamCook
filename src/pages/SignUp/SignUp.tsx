import React, { useState } from "react";
import SignUpView from "pages/SignUp/SignUpView";
import { Redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { rulesEmail, rulesPassword, rulesName } from "utils/rulesValidation";
import { TUserSignUp } from "utils/types";

const SignUp: React.FC = () => {
  const { signUp, loading, auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");

  let defaultValues = {
    name: "",
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

  const handlerSignUpButton = async (user: TUserSignUp) => {
    console.log(user)
    const errorSignUp = await signUp(user);
    if (errorSignUp != null) {
      setErrores(errorSignUp);
    } else {
      return <Redirect to="/home" />;
    }
  };

  const rules = {
    rulesName: rulesName(textos),
    rulesEmail: rulesEmail(textos),
    rulesPassword: rulesPassword(textos),
  };

  console.log("soy la page registro");

  return (
    <SignUpView
      rules={rules}
      handlerSignUpButton={handlerSignUpButton}
      textos={textos}
      errores={errores}
      loading={loading}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
      defaultValues={defaultValues}
    />
  );
};

export default SignUp;
