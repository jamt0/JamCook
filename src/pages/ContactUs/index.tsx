import { useEffect, useState } from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import Server from "server";
import { rulesEmail, rulesSubject, rulesMessage } from "utils/rulesValidation";
import { TMessage } from "models";
import useShowTabs from "hooks/useShowTabs";

const ContactUs: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [optionsSubjects, setoptionsSubjects] = useState();

  useShowTabs(false);

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
    if (errorMessage.data.error !== null) {
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
    rulesSubject: rulesSubject(t),
    rulesMessage: rulesMessage(t),
    rulesEmail: rulesEmail(t),
  };

  return (
    <View
      rules={rules}
      handlerSendButton={handlerSendButton}
      texts={t}
      errores={errores}
      loading={loading}
      formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
      defaultValues={defaultValues}
      optionsSubjects={optionsSubjects}
    />
  );
};

export default ContactUs;
