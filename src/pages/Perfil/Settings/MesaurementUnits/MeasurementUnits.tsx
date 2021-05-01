import React from "react";
import MeasurementUnitsView from "./MeasurementUnitsView";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";
import { TRadio } from "utils/types";

const MeasurementUnits: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const defaultValues = "2";

  const { control, handleSubmit } = useForm({ mode: "onSubmit" });

  const handlerSaveEditButton = (radio: TRadio) => {
    history.goBack();
  };

  const options = [
    {
      description: textos["unidades_medida_gramos"],
      value: "1",
    },
    {
      description: textos["unidades_medida_onzas"],
      value: "2",
    },
  ];

  return (
    <MeasurementUnitsView
      textos={textos}
      formHook={{ control, handleSubmit }}
      defaultValues={defaultValues}
      options={options}
      handlerSaveEditButton={handlerSaveEditButton}
    />
  );
};

export default MeasurementUnits;
