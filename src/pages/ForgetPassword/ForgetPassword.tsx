import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import { useForm } from "react-hook-form";
import Input from "components/Input/Input";
import Server from "server";

let defaultValues = {
  email: "",
};

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
  const handlerForgetPasswordButton = async (email: any) => {
    setLoading(true);
    const errorMailForgetPassword = await Server.sendMailForgetPassword(email);
    if (errorMailForgetPassword.data.error != null) {
      setHasErrors(errorMailForgetPassword.data.error);
      setLoading(false);
    } else {
      history.replace("/forgetPassword/validate");
      setLoading(false);
    }
  };

  const rulesEmail = {
    required: textos["campo_requerido"],
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos["campo_correo_invalido"],
    },
  };

  return (
    <Scaffold>
      <Scaffold.Header title={textos["contrasena_restablecer"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3">{hasErrors}</p>
        )}
        <p className="text-base text-center font-bold mt-6">
          {textos["signin_olvido_contraseña"]}
        </p>
        <p className="mx-auto mb-4 text-base text-center">
          {textos["introduce_contrasena"]}
        </p>
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.email}
          name="email"
          type="email"
          label={textos["campo_correo"]}
          rules={rulesEmail}
        />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={handleSubmit(handlerForgetPasswordButton)}
          disabled={!isValid || isSubmitting}
        >
          {textos["contrasena_restablecer"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default ForgetPassword;
