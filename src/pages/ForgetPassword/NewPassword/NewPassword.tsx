import React, { useState } from "react";
import NewPasswordView from "pages/ForgetPassword/NewPassword/NewPasswordView";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { rulesNewPassword, rulesConfirmPassword } from "utils/rulesValidation";
import { useForm } from "react-hook-form";
import Server from "server";
import RoutesPath from "utils/routesPath";

const NewPassword: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const defaultValues = { newPassword: "", confirmPassword: "" };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerNewPasswordButton = async (password: any) => {
    setLoading(true);
    //HAY QUE VER LA FORMA PARA RESTABLECER COMO CAMBIAR
    const errorChangePassword = await Server.changePassword(password);
    if (errorChangePassword.data.error != null) {
      setErrores(errorChangePassword.data.error);
      setLoading(false);
    } else {
      history.replace(RoutesPath.home);
      setLoading(false);
    }
  };

  const rules = {
    rulesNewPassword: rulesNewPassword(textos),
    rulesConfirmPassword: rulesConfirmPassword(textos),
  };

  return (
    <NewPasswordView
      rules={rules}
      textos={textos}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerNewPasswordButton={handlerNewPasswordButton}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
    />
  );
};

export default NewPassword;
