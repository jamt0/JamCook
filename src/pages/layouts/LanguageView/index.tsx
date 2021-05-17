import React, { FunctionComponent } from "react";
import { Button, RadioGroup, Scaffold, SubTitle } from "JamUI";
import { TRadio } from "utils/types";

type Props = {
  texts: any;
  defaultValues: string;
  formHook: any;
  options: any;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const LanguageView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.idioma}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.idioma_escoge}
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
export default LanguageView;
