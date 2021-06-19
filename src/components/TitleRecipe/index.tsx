import { FunctionComponent } from "react";
import { SubTitle } from "UI";

type Props = {};

const TitleRecipe: FunctionComponent<Props> = (props) => (
  <SubTitle align="center" className="mb-3 font-bold" color="dark">
    {props.children}
  </SubTitle>
);
export default TitleRecipe;
