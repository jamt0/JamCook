import React, { FunctionComponent } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Input from "components/Input/Input";
import SubTitle from "components/Text/SubTitle";
import Text from "components/Text/Text";
import Loading from "components/Loading/Loading";
import Error from "components/Error/Error";

type Props = {
  textos: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerForgetPasswordButton: (email: any) => void;
};

const ForgetPasswordView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.contrasena_restablecer}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <SubTitle className="mt-6">
        {props.textos.signin_olvido_contraseña}
      </SubTitle>
      <Text align="center" color="medium" className="mb-4 mt-2">
        {props.textos.introduce_contrasena}
      </Text>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.textos.campo_correo}
        rules={props.rules.rulesEmail}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerForgetPasswordButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.textos.contrasena_restablecer}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default ForgetPasswordView;
