import React, { useState } from "react";
import ForgetPasswordView from "pages/ForgetPassword/ForgetPassword/ForgetPasswordView";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { rulesEmail } from "utils/rulesValidation";
import Server from "server";

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues = { email: "" };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerForgetPasswordButton = async (email: any) => {
    setLoading(true);
    const errorMailForgetPassword = await Server.sendMailForgetPassword(email);
    if (errorMailForgetPassword.data.error != null) {
      setErrores(errorMailForgetPassword.data.error);
      setLoading(false);
    } else {
      history.replace("/forgetPassword/validate");
      setLoading(false);
    }
  };

  const rules = {
    rulesEmail: rulesEmail(textos),
  };

  return (
    <ForgetPasswordView
      rules={rules}
      textos={textos}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerForgetPasswordButton={handlerForgetPasswordButton}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
    />
  );
};

export default ForgetPassword;
