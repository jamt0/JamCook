import React, { FunctionComponent } from "react";
import RadioGroup from "components/RadioGroup/RadioGroup";
import SubTitle from "components/Text/SubTitle";
import Scaffold from "components/Scaffold/Scaffold";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Title from "components/Text/Title";
import Error from "components/Error/Error";
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

const CookingLevelView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.preferencias_mi_nivel_cocina}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
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
export default CookingLevelView;
