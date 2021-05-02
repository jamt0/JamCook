import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Error from "components/Error/Error";

type Props = {
  textos: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerNewPasswordButton: (password: any) => void;
};

const NewPasswordView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.contrasena_restablecer}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.newPassword}
        name="newPassword"
        type="password"
        label={props.textos.campo_nueva_contrasena}
        rules={props.rules.rulesNewPassword}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.ConfirmPassword}
        name="confirmPassword"
        type="password"
        label={props.textos.campo_confirme_contrasena}
        rules={props.rules.rulesConfirmPassword}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerNewPasswordButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.textos.contrasena_restablecer}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default NewPasswordView;
