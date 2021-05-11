import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  texts: any;
};

const Searcher: FunctionComponent<Props> = (props) => (
  <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
    <IonText color="secondary">{props.texts.jam}</IonText>
    <IonText color="primary">{props.texts.cook}</IonText>
  </h1>
);
export default Searcher;
