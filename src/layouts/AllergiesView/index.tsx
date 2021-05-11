import React, { FunctionComponent } from "react";
import { ChipGroup } from "components";
import { Scaffold, SubTitle, Loading, Button, Title, ErrorBox } from "JamUI";

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
    <Scaffold.Header title={props.texts.preferencias_alergias_intolerancias}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <ErrorBox>{props.errores}</ErrorBox>}
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
