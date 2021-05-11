import React, { FunctionComponent } from "react";
import ChipGroup from "layouts/ChipGroup/ChipGroup";
import SubTitle from "components/Text/SubTitle";
import Scaffold from "components/Scaffold/Scaffold";
import Loading from "components/Loading/Loading";
import Button from "components/Button/Button";
import Title from "components/Text/Title";
import Error from "components/Error/Error";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  ingredients: any;
  handlerSaveEditButton: (e: any) => void;
};

const AllergiesView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header
      title={props.texts.preferencias_alergias_intolerancias}
    >
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Title>{props.texts.alergias_intolerancias_header}</Title>
      <SubTitle className="mb-8 mt-2" color="medium">
        {props.texts.alergias_intolerancias_sub_header}
      </SubTitle>
      <ChipGroup ingredientes={props.ingredients} />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button onClick={props.handlerSaveEditButton}>
        {props.texts.guardar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default AllergiesView;
