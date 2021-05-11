import React from "react";
import { LanguageView } from "layouts";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";
import useShowTabs from "hooks/useShowTabs";

const Lenguage: React.FC = () => {
  const history = useHistory();
  const { texts, setLanguage, language } = useSettingsUser()!;

  useShowTabs(false);

  const defaultValues = language == "en" ? "2" : "1";

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const options = [
    {
      description: texts.idioma_espanol,
      value: "1",
    },
    {
      description: texts.idioma_ingles,
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
      texts={texts}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
    />
  );
};

export default Lenguage;
