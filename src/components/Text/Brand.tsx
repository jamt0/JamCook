import React, { FunctionComponent } from "react";
import { IonText } from "@ionic/react";

type Props = {
  textos: any;
};

const Searcher: FunctionComponent<Props> = (props) => (
  <h1 className="text-center text-5xl md:text-7xl font-black mb-4">
    <IonText color="secondary">{props.textos.jam}</IonText>
    <IonText color="primary">{props.textos.cook}</IonText>
  </h1>
);
export default Searcher;
