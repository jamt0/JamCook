import React, { FunctionComponent } from "react";
import Searcher from "components/Searcher/Searcher";
import GridImages from "layouts/GridImages/GridImages";
import Scaffold from "components/Scaffold/Scaffold";
import Title from "components/Text/Title";
import { TCategory } from "utils/types";

type Props = {
  textos: any;
  categories: TCategory[];
};

const ExploreView: FunctionComponent<Props> = (props) => (
    <Scaffold>
      <Scaffold.Content>
        <Title color="medium">{props.textos.page_explorar}</Title>
        <Searcher placeHolder={props.textos.plato_gustaria} />
        <GridImages categories={props.categories} />
      </Scaffold.Content>
    </Scaffold>
  );
export default ExploreView;
