import { FunctionComponent } from "react";
import Image from "components/Image/Image";
import { IonItemDivider } from "@ionic/react";
import React from "react";

type Props = {
  rounded?: boolean;
  fullCover?: boolean;
  src: string;
  height: number;
}

const ImageRecipe: FunctionComponent<Props> = ({
  src,
  children,
  fullCover,
  height,
  rounded = false, 
}) => {
  const heightCover = fullCover ? "full" : "20"
  const alignCover = fullCover ? "center" : "start"
  const opacityCover = fullCover ? "25" : "50"
  return (
    <div className="relative flex">
      {children != null && (
        <>
        <IonItemDivider color="dark" className={`ion-no-padding self-end absolute z-20 opacity-${opacityCover} h-${heightCover} w-full`} mode="md"/>
        <div className={`self-end absolute z-30 flex flex-col h-${heightCover} w-full justify-${alignCover} px-2 pt-2`} >
          {children}
        </div>
        </>
      )}
      <Image src={src} height={height} rounded={rounded}/>
    </div>
  );
};

export default ImageRecipe;
