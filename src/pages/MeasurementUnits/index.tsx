import React from "react";
import View from "./view";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";
import useShowTabs from "hooks/useShowTabs";

const MeasurementUnits: React.FC = () => {
  const history = useHistory();
  const { texts } = useSettingsUser()!;

  useShowTabs(false);
  
  const defaultValues = "2";

  const { control, handleSubmit } = useForm({ mode: "onSubmit" });

  const handlerSaveEditButton = (radio: TRadio) => {
    history.goBack();
  };

  const options = [
    {
      description: texts.unidades_medida_gramos,
      value: "1",
    },
    {
      description: texts.unidades_medida_onzas,
      value: "2",
    },
  ];

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

export default MeasurementUnits;
