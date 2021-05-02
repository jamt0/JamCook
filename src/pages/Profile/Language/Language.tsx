import React from "react";
import LanguageView from "pages/Profile/Language/LanguageView";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";

const Lenguage: React.FC = () => {
  const history = useHistory();
  const { textos, setLanguage, language } = useSettingsUser()!;

  const defaultValues = language == "en" ? "2" : "1";

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const options = [
    {
      description: textos.idioma_espanol,
      value: "1",
    },
    {
      description: textos.idioma_ingles,
      value: "2",
    },
  ];

  const handlerSaveEditButton = (radio: TRadio) => {
    if (radio.radio == "2") setLanguage("en");
    else setLanguage("es");
    history.goBack();
  };

  return (
    <LanguageView
      textos={textos}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
    />
  );
};

export default Lenguage;
