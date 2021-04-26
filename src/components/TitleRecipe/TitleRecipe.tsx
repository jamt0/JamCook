import SubTitle from "components/Text/SubTitle";
import { FunctionComponent } from "react";
import React from "react";

interface Props {}

const TitleRecipe: FunctionComponent<Props> = ({ children }) => {
  return (
    <SubTitle align="center" className="mb-3 font-bold" color="dark">
      {children}
    </SubTitle>
  );
};

export default TitleRecipe;
