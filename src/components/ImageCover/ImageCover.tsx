import React, { Fragment, FunctionComponent } from "react";
import Image from "components/Image/Image";
import { IonItemDivider } from "@ionic/react";

type Props = {
  src: string;
  height: number;
  rounded?: boolean;
  fullCover?: boolean;
};

const ImageCover: FunctionComponent<Props> = ({
  src,
  height,
  rounded = false,
  fullCover,
  children,
}) => {
  const heightCover = fullCover ? "full" : "20";
  const alignCover = fullCover ? "center" : "start";
  const opacityCover = fullCover ? "25" : "50";
  return (
    <div className="relative flex">
      {children != null && (
        <Fragment>
          <IonItemDivider
            color="dark"
            className={`ion-no-padding self-end absolute z-20 opacity-${opacityCover} h-${heightCover} w-full`}
            mode="md"
          />
          <div
            className={`self-end absolute z-30 flex flex-col h-${heightCover} w-full justify-${alignCover} px-2 pt-2`}
          >
            {children}
          </div>
        </Fragment>
      )}
      <Image src={src} height={height} rounded={rounded? "md" : "none"} />
    </div>
  );
};

export default ImageCover;
