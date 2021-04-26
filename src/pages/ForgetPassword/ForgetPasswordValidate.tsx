import React, { useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import Server from "server";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Center from "components/Center/Center";
import SubTitle from "components/Text/SubTitle";
import Text from "components/Text/Text";

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

  /**
   *
   * @param data
   */
  const handlerForgetPasswordValidateButton = async (verificationCode: any) => {
    const errorValidateVerificationCode = await Server.validateVerificationCode(
      verificationCode
    );
    if (errorValidateVerificationCode.data.error != null) {
      setHasErrors(errorValidateVerificationCode.data.error);
      setLoading(false);
    } else {
      history.replace("/forgetPassword/newPassword");
      setLoading(false);
    }
  };

  const handlerResendMailButton = (e: any) => {
    console.log("se envio mail");
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
        <SubTitle className="mt-6">{textos["consulta_correo"]}</SubTitle>
        <Text align="center" color="medium" className="mb-4 mt-2">
          {textos["introduce_codigo"]}
        </Text>
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.VerificationCode}
          name="VerificationCode"
          type="number"
          label={textos["campo_nombre"]}
          rules={rulesVerificationCode}
        />
        <Center justify="end">
          <ButtonLink onClick={handlerResendMailButton}>
            {textos["no_recibio_contrasena"]}
          </ButtonLink>
        </Center>
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
