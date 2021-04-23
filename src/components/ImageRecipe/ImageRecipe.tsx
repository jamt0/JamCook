import { FunctionComponent } from "react";
import Image from "components/Image/Image";
import { IonItemDivider } from "@ionic/react";

type Props = {
  rounded?: boolean; 
  src: string;
  height: number;
}

const ImageRecipe: FunctionComponent<Props> = ({
  src,
  children,
  height,
  rounded = false, 
}) => {
  const redondeo = rounded ? "rounded-md" : ""
  return (
    <div className="relative flex">
      {children != null && (
        <>
        <IonItemDivider color="dark" className={` ion-no-padding self-end absolute z-20 flex flex-col ${redondeo} opacity-50 bg-opacity-50 h-20 w-full justify-center px-2`} mode="md"/>
        <div className={`self-end absolute z-20 flex flex-col ${redondeo} h-20 w-full justify-center px-2`} >
          {children}
        </div>
        </>
      )}
      <Image src={src} height={height} />
    </div>
  );
};

export default ImageRecipe;
