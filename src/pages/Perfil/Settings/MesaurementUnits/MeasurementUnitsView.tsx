import React, { FunctionComponent } from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import { TRadio } from "utils/types";

type Props = {
  textos: any;
  defaultValues: string;
  formHook: any;
  options: any;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const MeasurementUnitsView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos["unidades_medida"]}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.textos["unidades_medida_escoge"]}
      </SubTitle>
      <RadioGroup
        control={props.formHook.control}
        options={props.options}
        defaultOption={props.defaultValues}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSaveEditButton)}
      >
        {props.textos["guardar"]}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default MeasurementUnitsView;
