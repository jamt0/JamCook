import React, { FunctionComponent } from "react";
import { IonSlide } from "@ionic/react";

type Props = {};

const Slide: FunctionComponent<Props> = ({ children }) => {
  return <IonSlide>{children}</IonSlide>;
};

export default Slide;
