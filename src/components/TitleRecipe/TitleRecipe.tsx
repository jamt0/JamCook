import SubTitle from "components/Text/SubTitle";
import React, { FunctionComponent } from "react";

type Props = {}

const TitleRecipe: FunctionComponent<Props> = ({ children }) => {
  return (
    <SubTitle align="center" className="mb-3 font-bold" color="dark">
      {children}
    </SubTitle>
  );
};

export default TitleRecipe;
