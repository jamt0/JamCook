import React, { FunctionComponent } from "react";
import Scaffold from "components/Scaffold/Scaffold";
import ItemIcon from "layouts/ItemIcon/ItemIcon";

type Props = {
  texts: any;
  items: any[];
};

const LegalInformationView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.informacion_legal}>
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
export default LegalInformationView;
