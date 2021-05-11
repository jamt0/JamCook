import React, { FunctionComponent } from "react";
import ChipGroup from "layouts/ChipGroup/ChipGroup";
import SubTitle from "components/Text/SubTitle";
import Scaffold from "components/Scaffold/Scaffold";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Error from "components/Error/Error";
import Title from "components/Text/Title";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  ingredients: any;
  handlerSaveEditButton: (e: any) => void;
};

const DislikeIngredientView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header
      title={props.texts.preferencias_ingredientes_no_gustan}
    >
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Title>{props.texts.ingredientes_no_gustan_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.ingredientes_no_gustan_sub_header}
      </SubTitle>
      <ChipGroup ingredientes={props.ingredients} />
      <div className="ml-4 mt-4">
        <Button onClick={() => {}} color="light" size="small">
          {props.texts.ver_mas}
        </Button>
      </div>
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button onClick={props.handlerSaveEditButton}>
        {props.texts.guardar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default DislikeIngredientView;
