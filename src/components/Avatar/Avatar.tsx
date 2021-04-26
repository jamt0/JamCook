import { IonAvatar, IonImg } from "@ionic/react";
import { FunctionComponent } from "react";
import React from "react";

interface Props {
  size: number;
  sizeResponsive?: number;
  src: any;
}

const Avatar: FunctionComponent<Props> = ({
  src,
  size,
  sizeResponsive = size,
}) => {
  return (
    <IonAvatar
      className={`w-${size} h-${size} md:h-${sizeResponsive} md:w-${sizeResponsive}`}
    >
      <IonImg src={src} />
    </IonAvatar>
  );
};

export default Avatar;
