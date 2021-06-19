import { FunctionComponent } from "react";
import { Scaffold, SubTitle, Button, RadioGroup } from "UI";
import { TRadio } from "utils/types";

type Props = {
  texts: any;
  defaultValues: string;
  formHook: any;
  options: any;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.unidades_medida}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.unidades_medida_escoge}
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
        {props.texts.guardar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default View;
