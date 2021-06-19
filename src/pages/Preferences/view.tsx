import { FunctionComponent } from "react";
import { Scaffold } from "UI";
import { ItemIcon } from "components";

type Props = {
  title: string;
  items: {
    routerLink: string;
    name: string;
  }[];
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.title}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      {props.items.map((item, index) => (
        <ItemIcon routerLink={item.routerLink} key={index}>{item.name}</ItemIcon>
      ))}
    </Scaffold.Content>
  </Scaffold>
);
export default View;
