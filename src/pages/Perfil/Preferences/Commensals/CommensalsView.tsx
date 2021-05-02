import React, { FunctionComponent } from "react";
import Counter from "layouts/Counter/Counter";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
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
  watchRadio: any;
  amountUser: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
  setAmountUser: (amount: number) => void;
};

const CommensalsView: FunctionComponent<Props> = ({ ...props }) => (
  <Scaffold>
    <Scaffold.Header title={props.textos.preferencias_numero_comensales}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Title>{props.textos.comensales_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.textos.comensales_sub_header}
      </SubTitle>
      <RadioGroup
        control={props.formHook.control}
        options={props.options}
        defaultOption={props.defaultValues}
      />
      {props.watchRadio == "2" && (
        <Counter
          portions={props.amountUser}
          setPortions={props.setAmountUser}
        />
      )}
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

export default CommensalsView;
