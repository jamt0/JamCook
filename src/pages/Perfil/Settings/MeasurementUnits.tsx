import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { useForm } from "react-hook-form";

type Radio = {
  radio: string;
};

const MeasurementUnits: React.FC = () => {
  const history = useHistory();
  const { textos } = useSettingsUser()!;

  const defaultValue = "2";

  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
  });

  const handlerSaveEditButton = (data: Radio) => {
    console.log(data);
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

  console.log("soy la page unidades de medida");

  return (
    <Scaffold>
      <Scaffold.Header title={textos["unidades_medida"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <SubTitle className="mb-8 mt-2" color="medium">
          {textos["unidades_medida_escoge"]}
        </SubTitle>
        <RadioGroup
          control={control}
          options={options}
          defaultOption={defaultValue}
        />
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handleSubmit(handlerSaveEditButton)}>
          {textos["guardar"]}
        </Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default MeasurementUnits;
