import React, { FunctionComponent } from "react";
import { TMessage } from "utils/types";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  ErrorBox,
  TextArea,
  Select,
  Input,
} from "JamUI";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  rules: any;
  defaultValues: TMessage;
  optionsSubjects: any;
  handlerSendButton: (message: TMessage) => void;
};

const ContactUsView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.contacto}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <SubTitle>{props.texts.contacto_header}</SubTitle>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.texts.campo_correo}
        rules={props.rules.rulesEmail}
      />
      <Select
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.subjectId}
        options={props.optionsSubjects}
        name="subjectId"
        label={props.texts.campo_asunto}
        rules={props.rules.rulesSubject}
      />
      <TextArea
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.message}
        name="message"
        placeHolder={props.texts.contacto_placeholder}
        label={props.texts.campo_mensaje}
        rules={props.rules.rulesMessage}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSendButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.contacto_enviar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default ContactUsView;
