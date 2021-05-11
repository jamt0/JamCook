import React, { FunctionComponent } from "react";
import Lottie from "react-lottie";
import Button from "components/Button/Button";
import Scaffold from "components/Scaffold/Scaffold";
import Brand from "components/Text/Brand";
import Slogan from "components/Text/Slogan";
import SubTitle from "components/Text/SubTitle";
import RoutesPath from "utils/routesPath";

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
          <Slogan color="medium">{props.texts.slogan}</Slogan>
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
