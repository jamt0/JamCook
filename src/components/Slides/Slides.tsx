import React, { FunctionComponent } from "react";
import { IonSlides } from "@ionic/react";

type Props = {
  options: {
    slidesPerView: number;
    spaceBetween: number;
  };
};

const Slides: FunctionComponent<Props> = ({ options, children }) => {
  const { slidesPerView, spaceBetween } = options;

  const slideOptions = {
    slidesPerView,
    spaceBetween,
  };

  return (
    <IonSlides options={slideOptions} className="z-0 my-4">
      {children}
    </IonSlides>
  );
};

export default Slides;
