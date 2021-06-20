import { FunctionComponent } from "react";
import { Counter } from "components";
import { TRadio } from "models";
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
  watchRadio: any;
  amountUser: any;
  defaultValues: undefined | string;
  handlerSaveEditButton: (radio: TRadio) => void;
  setAmountUser: (amount: number) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('preferencias_numero_comensales')}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Title>{props.texts('comensales_header')}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts('comensales_sub_header')}
      </SubTitle>
      <RadioGroup
        control={props.formHook.control}
        options={props.options}
        defaultOption={props.defaultValues}
      />
      {props.watchRadio === "2" && (
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
        {props.texts('guardar')}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);

export default View;
