import { IonAvatar, IonImg } from "@ionic/react";
import React, { FunctionComponent } from "react";

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
      className={`w-${size} h-${size} md:h-${sizeResponsive} md:h-${sizeResponsive}`}
    >
      <IonImg src={src} />
    </IonAvatar>
  );
};

export default Avatar;
