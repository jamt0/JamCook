import React, { FunctionComponent, useEffect, useState } from "react";
import Center from "../Center/Center";

interface Props {
  porciones: number;
  setPorciones: (porciones: number) => void;
}

const Counter: FunctionComponent<Props> = ({ porciones, setPorciones}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [classPorciones, setClassPorciones] = useState(" ");

  useEffect(() => {
    if (porciones == 1) {
      setClassPorciones(" bg-opacity-25 ");
      setIsDisabled(true);
    } else {
      setClassPorciones(" ");
      setIsDisabled(false);
    }
  }, [porciones]);

  const handlerSuma = (e: any) => {
    setPorciones(porciones + 1);
  };

  const handlerResta = (e: any) => {
    setPorciones(porciones - 1);
  };
  return (
    <Center direccion="row" className="w-full">
      <button
        className={"bg-purple-500 h-12 w-12 rounded-l-md" + classPorciones}
        onClick={handlerResta}
        disabled={isDisabled}
      >
        <p className="text-white">{"<"}</p>
      </button>
      <Center direccion="col" className="w-full bg-gray-100 h-12">
        <h3 className="text-black text-center">{porciones}</h3>
      </Center>
      <button
        className="bg-purple-500 h-12 w-12 rounded-r-md"
        onClick={handlerSuma}
      >
        <p className="text-white">{">"}</p>
      </button>
    </Center>
  );
};

export default Counter;
