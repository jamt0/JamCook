import { FunctionComponent } from "react";
import { Text } from "UI";

type Props = {
  texts: any;
};

const Searcher: FunctionComponent<Props> = (props) => (
  <h1 className="text-center mb-4">
    <Text className="text-5xl md:text-7xl font-black" color="secondary">{props.texts('jam')}</Text>
    <Text className="text-5xl md:text-7xl font-black" color="primary">{props.texts('cook')}</Text>
  </h1>
);
export default Searcher;
