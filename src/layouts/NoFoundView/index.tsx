import React, { FunctionComponent } from "react";
import Lottie from "react-lottie";
import { Scaffold, SubTitle, Button } from "JamUI";
import RoutesPath from "routes";
import { Brand } from "components";

type Props = {
  texts: any;
  animationOptions: any;
};

const NoFoundView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content height="full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <Brand texts={props.texts} />
          <SubTitle color="medium">{props.texts.slogan}</SubTitle>
        </div>
        <div className="flex flex-col justify-center h-full">
          <Lottie options={props.animationOptions} height={220} width={335} />
          <SubTitle color="medium">{props.texts.page_404_ups}</SubTitle>
        </div>
        <Button routerLink={RoutesPath.home}>
          {props.texts.page_404_inicio}
        </Button>
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default NoFoundView;
