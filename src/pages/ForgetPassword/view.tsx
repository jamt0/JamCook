import { FunctionComponent } from "react";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Text,
  Input,
  ErrorBox,
} from "UI";

type Props = {
  texts: any;
  loading: boolean;
  errores: string;
  formHook: any;
  rules: any;
  defaultValues: any;
  handlerForgetPasswordButton: (email: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.contrasena_restablecer}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <SubTitle className="mt-6">
        {props.texts.signin_olvido_contraseña}
      </SubTitle>
      <Text align="center" color="medium" className="mb-4 mt-2">
        {props.texts.introduce_contrasena}
      </Text>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.texts.campo_correo}
        rules={props.rules.rulesEmail}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerForgetPasswordButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.contrasena_restablecer}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default View;
