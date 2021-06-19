import React from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";
import useShowTabs from "hooks/useShowTabs";

const Theme: React.FC = () => {
  const history = useHistory();
  const { texts, setTheme, theme } = useSettingsUser()!;

  useShowTabs(false);

  const defaultValues = theme === "dark" ? "2" : "1";

  const { control, handleSubmit } = useForm({ mode: "onSubmit" });

  const options = [
    {
      description: texts.tema_claro,
      value: "1",
    },
    {
      description: texts.tema_oscuro,
      value: "2",
    },
  ];

  const handlerSaveEditButton = (radio: TRadio) => {
    if (radio.radio === "2") setTheme("dark");
    else setTheme("light");
    history.goBack();
  };

  return (
    <View
      texts={texts}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
    />
  );
};

export default Theme;
