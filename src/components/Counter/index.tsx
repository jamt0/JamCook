import { FunctionComponent, useEffect, useState } from "react";
import CounterView from "components/Counter/CounterView";

interface Props {
  portions: number;
  setPortions: (portions: number) => void;
}

const Counter: FunctionComponent<Props> = ({ portions, setPortions }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (portions <= 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [portions]);

  const handlerPlus = (e: any) => {
    setPortions(portions + 1);
  };

  const handlerSubtract = (e: any) => {
    if (portions > 1) setPortions(portions - 1);
  };
  return (
    <CounterView
      portions={portions}
      disabled={disabled}
      handlerSubtract={handlerSubtract}
      handlerPlus={handlerPlus}
    />
  );
};

export default Counter;
