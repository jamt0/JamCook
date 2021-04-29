import React, { FunctionComponent } from "react";
import { IonAvatar } from "@ionic/react";
import Image from "components/Image/Image";

type Props = {
  size: number;
  sizeResponsive?: number;
  src: any;
};

const Avatar: FunctionComponent<Props> = ({
  src,
  size,
  sizeResponsive = size,
}) => {
  return (
    <IonAvatar
      className={`w-${size} h-${size} md:h-${sizeResponsive} md:w-${sizeResponsive}`}
    >
      <Image src={src} rounded="full"/>
    </IonAvatar>
  );
};

export default Avatar;
