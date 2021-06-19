import { useState } from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useSettingsUser } from "context/settingsUser";
import { rulesVerificationCode } from "utils/rulesValidation";
import Server from "server";
import RoutesPath from "routes";
import useShowTabs from "hooks/useShowTabs";

const ForgetPasswordValidate: React.FC = () => {
  const history = useHistory();
  const { texts } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useShowTabs(false);

  const defaultValues = { VerificationCode: "" };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerForgetPasswordValidateButton = async (verificationCode: any) => {
    const errorValidateVerificationCode = await Server.validateVerificationCode(
      verificationCode
    );
    if (errorValidateVerificationCode.data.error !== null) {
      setErrores(errorValidateVerificationCode.data.error);
      setLoading(false);
    } else {
      history.replace(RoutesPath.newPassword);
      setLoading(false);
    }
  };

  const handlerResendMailButton = (e: any) => {
    e.preventDefault();
  };

  const rules = {
    rulesVerificationCode: rulesVerificationCode(texts),
  };

  return (
    <View
      rules={rules}
      texts={texts}
      errores={errores}
      loading={loading}
      defaultValues={defaultValues}
      handlerResendMailButton={handlerResendMailButton}
      handlerForgetPasswordValidateButton={handlerForgetPasswordValidateButton}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
    />
  );
};

export default ForgetPasswordValidate;
