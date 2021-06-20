import { FunctionComponent } from "react";
import { Scaffold } from "UI";
import { ItemIcon } from "components";

type Props = {
  texts: any;
  items: any[];
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts('informacion_legal')}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      {props.items.map((item, index) => (
        <ItemIcon routerLink={item.routerLink} key={index}>
          {item.name}
        </ItemIcon>
      ))}
    </Scaffold.Content>
  </Scaffold>
);
export default View;
