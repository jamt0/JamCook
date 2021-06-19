import { FunctionComponent } from "react";
import { IonAvatar } from "@ionic/react";
import { Image } from "UI";

type Props = {
  size: number;
  sizeResponsive?: number;
  src: any;
};

const Avatar: FunctionComponent<Props> = ({
  size,
  sizeResponsive = size,
  ...props
}) => (
  <IonAvatar
    className={`w-${size} h-${size} md:h-${sizeResponsive} md:w-${sizeResponsive}`}
  >
    <Image src={props.src} rounded="full" />
  </IonAvatar>
);
export default Avatar;
