import React, { FunctionComponent } from "react";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Error from "components/Error/Error";
import Input from "components/Input/Input";
import Text from "components/Text/Text";

type Props = {
  texts: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerResendMailButton: (e: any) => void;
  handlerForgetPasswordValidateButton: (code: any) => void;
};

const ForgetPasswordValidateView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.contrasena_restablecer}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <SubTitle className="mt-6">{props.texts.consulta_correo}</SubTitle>
      <Text align="center" color="medium" className="mb-4 mt-2">
        {props.texts.introduce_codigo}
      </Text>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.VerificationCode}
        name="VerificationCode"
        type="number"
        label={props.texts.campo_nombre}
        rules={props.rules.rulesVerificationCode}
      />
      <Center justify="end">
        <ButtonLink onClick={props.handlerResendMailButton}>
          {props.texts.no_recibio_contrasena}
        </ButtonLink>
      </Center>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(
          props.handlerForgetPasswordValidateButton
        )}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.contrasena_restablecer}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default ForgetPasswordValidateView;
