import { FunctionComponent } from "react";

type Props = {
  rounded?: boolean; 
  src: string;
  height: number;
  width?: number;
}

const ImageRecipe: FunctionComponent<Props> = ({
  src,
  children,
  height,
  width = "full",
  rounded = false, 
}) => {
  const redondeo = rounded ? "rounded-md" : ""
  return (
    <div className="relative flex">
      {children != null && (
        <div className={`self-end absolute z-20 flex flex-col ${redondeo} bg-black bg-opacity-50 h-20 w-full justify-center px-4`} >
          {children}
        </div>
      )}
      <div
        className={`w-${width} h-${height} ${redondeo} bg-gray-500 bg-opacity-50 bg-cover bg-center z-10`}
        style={{ backgroundImage: `url( ${src} )` }}
      ></div>
    </div>
  );
};

export default ImageRecipe;
