import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import TextArea from "components/TextArea/TextArea";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import { IonLoading } from "@ionic/react";
import Server from "server";

let defaultValues = {
  email: "",
  subjectId: "",
  message: "",
};

interface IMessage {
  email: string;
  subjectId: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const history = useHistory();
  //SE DEJA ESTE AUTH YA QUE SE VA A UTILIZAR CUANDO QUERAMOS OBTENER EL CORREO
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;

  const [hasErrors, setHasErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [optionsSubjects, setoptionsSubjects] = useState();

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
  const handlerSendButton = async (message: IMessage) => {
    setLoading(true);
    const errorMessage = await Server.sendMessage(message);
    if (errorMessage.data.error != null) {
      setHasErrors(errorMessage.data.error);
      setLoading(false);
    } else {
      history.goBack();
      setLoading(false);
    }
  };

  useEffect(() => {
    Server.getSubjects()
      .then((response) => {
        if (!response.data.error) {
          setoptionsSubjects(response.data.options);
        } else {
          setHasErrors(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const rulesSubject = {
    required: textos.campo_requerido,
  };

  const rulesMessage = {
    required: textos.campo_requerido,
  };

  const rulesEmail = {
    required: textos.campo_requerido,
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: textos.campo_correo_invalido,
    },
  };

  return (
    <Scaffold>
      <Scaffold.Header title={textos.contacto}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <IonLoading isOpen={loading} translucent />
        {hasErrors != "" && (
          <p className="text-red-600 bg-red-100 px-6 py-3 my-2">{hasErrors}</p>
        )}
        <h6 className="text-2xl font-bold text-center">
          {textos.contacto_header}
        </h6>
        <Input
          control={control}
          errors={errors}
          defaultValue={defaultValues.email}
          name="email"
          type="email"
          label={textos.campo_correo}
          rules={rulesEmail}
        />
        <Select
          control={control}
          errors={errors}
          defaultValue={defaultValues.subjectId}
          options={optionsSubjects}
          name="subjectId"
          label={textos.campo_asunto}
          rules={rulesSubject}
        />
        <TextArea
          control={control}
          errors={errors}
          defaultValue={defaultValues.message}
          name="message"
          placeHolder={textos.contacto_placeholder}
          label={textos.campo_mensaje}
          rules={rulesMessage}
        />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button
          onClick={handleSubmit(handlerSendButton)}
          disabled={!isValid || isSubmitting}
        >
          {textos.contacto_enviar}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default ContactUs;
