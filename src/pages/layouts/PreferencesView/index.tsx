import React, { FunctionComponent } from "react";
import { Scaffold } from "JamUI";
import { ItemIcon } from "components";

type Props = {
  title: string;
  items: {
    routerLink: string;
    name: string;
  }[];
};

const PreferencesView: FunctionComponent<Props> = (props) => (
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
export default PreferencesView;
