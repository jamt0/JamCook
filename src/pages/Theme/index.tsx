import React from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { TRadio } from "models";
import useShowTabs from "hooks/useShowTabs";
import { useSettingsUser } from "context/settingsUser";

const Theme: React.FC = () => {
  const history = useHistory();
  const { setTheme, theme } = useSettingsUser()!;
  const { t } = useTranslation();

  useShowTabs(false);

  const defaultValues = theme === "dark" ? "2" : "1";

  const { control, handleSubmit } = useForm({ mode: "onSubmit" });

  const options = [
    {
      description: t('tema_claro'),
      value: "1",
    },
    {
      description: t('tema_oscuro'),
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
      texts={t}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
    />
  );
};

export default Theme;
