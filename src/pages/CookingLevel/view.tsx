import { FunctionComponent } from "react";
import { TRadio } from "utils/types";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Title,
  ErrorBox,
  RadioGroup,
} from "UI";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  options: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.preferencias_mi_nivel_cocina}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Title>{props.texts.nivel_cocina_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.nivel_cocina_sub_header}
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
