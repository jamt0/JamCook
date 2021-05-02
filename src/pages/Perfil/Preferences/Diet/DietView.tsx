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
  textos: any;
  loading: boolean;
  errores: any;
  formHook: any;
  options: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
};

const DietView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.preferencias_dieta}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Loading isOpen={props.loading} />
      <Title>{props.textos.dieta_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.textos.dieta_sub_header}
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
        {props.textos.guardar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default DietView;
