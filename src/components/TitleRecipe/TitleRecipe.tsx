import React, { FunctionComponent } from "react";
import SubTitle from "components/Text/SubTitle";

type Props = {};

const TitleRecipe: FunctionComponent<Props> = (props) => (
  <SubTitle align="center" className="mb-3 font-bold" color="dark">
    {props.children}
  </SubTitle>
);
export default TitleRecipe;
