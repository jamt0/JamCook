import React, { useEffect, useState } from "react";
import ContactUsView from "pages/Profile/ContactUs/ContactUsView";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "auth";
import { useSettingsUser } from "context/settingsUser";
import Server from "server";
import { rulesEmail, rulesSubject, rulesMessage } from "utils/rulesValidation";
import { TMessage } from "utils/types";

const ContactUs: React.FC = () => {
  const history = useHistory();
  //SE DEJA ESTE AUTH YA QUE SE VA A UTILIZAR CUANDO QUERAMOS OBTENER EL CORREO
  const { auth } = useAuth()!;
  const { textos } = useSettingsUser()!;
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [optionsSubjects, setoptionsSubjects] = useState();

  const defaultValues = { email: "", subjectId: "", message: "" };

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerSendButton = async (message: TMessage) => {
    setLoading(true);
    const errorMessage = await Server.sendMessage(message);
    if (errorMessage.data.error != null) {
      setErrores(errorMessage.data.error);
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
          setErrores(response.data.error);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const rules = {
    rulesSubject: rulesSubject(textos),
    rulesMessage: rulesMessage(textos),
    rulesEmail: rulesEmail(textos),
  };

  return (
    <ContactUsView
      rules={rules}
      handlerSendButton={handlerSendButton}
      textos={textos}
      errores={errores}
      loading={loading}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
      defaultValues={defaultValues}
      optionsSubjects={optionsSubjects}
    />
  );
};

export default ContactUs;
