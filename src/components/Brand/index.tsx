import React, { FunctionComponent } from "react";
import { Text } from "JamUI";

type Props = {
  texts: any;
};

const Searcher: FunctionComponent<Props> = (props) => (
  <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
    <Text color="secondary">{props.texts.jam}</Text>
    <Text color="primary">{props.texts.cook}</Text>
  </h1>
);
export default Searcher;
