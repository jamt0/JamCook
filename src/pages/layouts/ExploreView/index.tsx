import React, { FunctionComponent } from "react";
import { GridImages } from "components";
import { TCategory } from "utils/types";
import { Scaffold, Searcher, Title } from "JamUI";

type Props = {
  texts: any;
  categories: TCategory[];
};

const ExploreView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content>
      <Title color="medium">{props.texts.page_explorar}</Title>
      <Searcher placeHolder={props.texts.plato_gustaria} />
      <GridImages categories={props.categories} />
    </Scaffold.Content>
  </Scaffold>
);
export default ExploreView;
