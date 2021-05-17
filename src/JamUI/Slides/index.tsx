import React, { FunctionComponent } from "react";
import { IonSlides } from "@ionic/react";

type Props = {
  options: {
    slidesPerView: number;
    spaceBetween?: number;
    pagination?: any;
  };
};

const Slides: FunctionComponent<Props> = (props) => {
  return (
    <IonSlides pager={true} options={props.options} className="z-0 my-4">
      {props.children}
    </IonSlides>
  );
};

export default Slides;
