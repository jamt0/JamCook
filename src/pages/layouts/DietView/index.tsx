import React, { FunctionComponent } from "react";
import { TRadio } from "utils/types";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Title,
  ErrorBox,
  RadioGroup,
} from "JamUI";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  options: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const DietView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.preferencias_dieta}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Loading isOpen={props.loading} />
      <Title>{props.texts.dieta_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.dieta_sub_header}
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
export default DietView;
