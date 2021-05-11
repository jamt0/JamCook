import React, { FunctionComponent } from "react";
import { IonSlide } from "@ionic/react";

type Props = {};

const Slide: FunctionComponent<Props> = (props) => (
  <IonSlide>{props.children}</IonSlide>
);
export default Slide;
