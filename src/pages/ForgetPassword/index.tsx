import { useState } from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { rulesEmail } from "utils/rulesValidation";
import Server from "server";
import RoutesPath from "routes";
import useShowTabs from "hooks/useShowTabs";

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  const { texts } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useShowTabs(false);

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
    if (errorMailForgetPassword.data.error !== null) {
      setErrores(errorMailForgetPassword.data.error);
      setLoading(false);
    } else {
      history.replace(RoutesPath.forgetPasswordValidate);
      setLoading(false);
    }
  };

  const rules = {
    rulesEmail: rulesEmail(texts),
  };

  return (
    <View
      rules={rules}
      texts={texts}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerForgetPasswordButton={handlerForgetPasswordButton}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
    />
  );
};

export default ForgetPassword;
