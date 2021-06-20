import { FunctionComponent } from "react";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Text,
  ErrorBox,
  Center,
  ButtonLink,
  Input,
} from "UI";

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

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('contrasena_restablecer')}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <SubTitle className="mt-6">{props.texts('consulta_correo')}</SubTitle>
      <Text align="center" color="medium" className="mb-4 mt-2">
        {props.texts('introduce_codigo')}
      </Text>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.VerificationCode}
        name="VerificationCode"
        type="number"
        label={props.texts('campo_nombre')}
        rules={props.rules.rulesVerificationCode}
      />
      <Center justify="end">
        <ButtonLink onClick={props.handlerResendMailButton}>
          {props.texts('no_recibio_contrasena')}
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
        {props.texts('contrasena_restablecer')}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default View;
