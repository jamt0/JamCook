import { FunctionComponent } from "react";
import { GridImages } from "components";
import { TCategory } from "models";
import { Scaffold, Searcher, Title } from "UI";

type Props = {
  texts: any;
  categories: TCategory[];
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content>
      <Title color="medium">{props.texts('page_explorar')}</Title>
      <Searcher placeHolder={props.texts('plato_gustaria')} />
      <GridImages categories={props.categories} />
    </Scaffold.Content>
  </Scaffold>
);
export default View;
