import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import {useHistory} from 'react-router';
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import { useForm } from "react-hook-form";
import Input from "components/Input/Input";
import Server from "server";

let defaultValues = {
  email: "",
};

const ForgetPassword: React.FC = ( ) => {
  
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
    //ACA SE DEJA ESTE ERROR HASTA QUE EXISTA EL POINT
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
      message: textos["campo_correo_invalido"]
    },
  };

  return (
    <Scaffold
      tituloHeader={textos["contrasena_restablecer"]}
      footer={
        <div className="p-2 mb-2 max-w-screen-md mx-auto">
          <Button
            handler={handleSubmit(handlerForgetPasswordButton)}
            disable={!isValid || isSubmitting}
            label={textos["contrasena_restablecer"]}
          />
        </div>
      }
    >
      <IonLoading isOpen={loading} translucent />
      <div className="max-w-screen-md mx-auto p-4 h-full">
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
      </div>
    </Scaffold>
  );
};

export default ForgetPassword;
