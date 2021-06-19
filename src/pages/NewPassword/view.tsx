import { FunctionComponent } from "react";
import {
  Scaffold,
  Loading,
  Button,
  ErrorBox,
  Input,
} from "UI";

type Props = {
  texts: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerNewPasswordButton: (password: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.contrasena_restablecer}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.newPassword}
        name="newPassword"
        type="password"
        label={props.texts.campo_nueva_contrasena}
        rules={props.rules.rulesNewPassword}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.ConfirmPassword}
        name="confirmPassword"
        type="password"
        label={props.texts.campo_confirme_contrasena}
        rules={props.rules.rulesConfirmPassword}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerNewPasswordButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.contrasena_restablecer}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default View;
