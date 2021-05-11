import React, { FunctionComponent } from "react";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Title,
  RadioGroup,
  ErrorBox,
} from "JamUI";
import { TRadio } from "utils/types";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  options: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const MyObjectivesView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.preferencias_mis_objetivos}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Title>{props.texts.objetivos_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.objetivos_sub_header}
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
export default MyObjectivesView;
