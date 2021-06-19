import { FunctionComponent } from "react";

interface Props {}

const ContainerSection: FunctionComponent<Props> = (props) => (
  <div className="px-3 mb-8 mt-2">{props.children}</div>
);
export default ContainerSection;
