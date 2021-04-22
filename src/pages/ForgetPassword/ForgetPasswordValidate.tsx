import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import Server from "server";

let defaultValues = {
  VerificationCode: "",
};

const ForgetPasswordValidate: React.FC = () => {
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

  const handlerForgetPasswordValidateButton = async (verificationCode: any) => {
    const errorValidateVerificationCode = await Server.validateVerificationCode(
      verificationCode
    );
    if (errorValidateVerificationCode.data.error != null) {
      setHasErrors(errorValidateVerificationCode.data.error);
      setLoading(false);
    } else {
      history.replace("/home/perfil");
      setLoading(false);
    }
  };

  const handlerResendMailButton = (e: any) => {
    e.preventDefault();
  };

  //VALIDAR QUE SEA LONGITUD 6
  const rulesVerificationCode = {
    required: textos["campo_requerido"],
  };

  console.log("soy la page forget validation pass");

  return (
    <Scaffold>
      <Scaffold.Header title={textos["contrasena_restablecer"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
        )}
        <p className="text-base text-center font-bold mt-6">
          {textos["consulta_correo"]}
        </p>
        <p className="mx-1 mb-4 text-base text-center md:text-left">
          {textos["introduce_codigo"]}
        </p>
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.VerificationCode}
          name="VerificationCode"
          type="number"
          label={textos["campo_nombre"]}
          rules={rulesVerificationCode}
        />
        <div className="flex justify-end">
          <Button onClick={handlerResendMailButton} color="light">
            {textos["no_recibio_contrasena"]}
          </Button>
        </div>
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={handleSubmit(handlerForgetPasswordValidateButton)}
          disabled={!isValid || isSubmitting}
        >
          {textos["contrasena_restablecer"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default ForgetPasswordValidate;
