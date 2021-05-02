import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import TextArea from "components/TextArea/TextArea";
import SubTitle from "components/Text/SubTitle";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Select from "components/Select/Select";
import Input from "components/Input/Input";
import Error from "components/Error/Error";
import { TMessage } from "utils/types";

type Props = {
  textos: any;
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
    <Scaffold.Header title={props.textos.contacto}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <SubTitle>{props.textos.contacto_header}</SubTitle>
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.textos.campo_correo}
        rules={props.rules.rulesEmail}
      />
      <Select
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.subjectId}
        options={props.optionsSubjects}
        name="subjectId"
        label={props.textos.campo_asunto}
        rules={props.rules.rulesSubject}
      />
      <TextArea
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.message}
        name="message"
        placeHolder={props.textos.contacto_placeholder}
        label={props.textos.campo_mensaje}
        rules={props.rules.rulesMessage}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSendButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.textos.contacto_enviar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default ContactUsView;
