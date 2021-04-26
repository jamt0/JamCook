import { FunctionComponent } from "react";
import React from "react";

type Props = {
};

const CardHeaderCompact: FunctionComponent<Props> = ({
  children
}) => {
  return (
      <>{children}</>
  );
};

export default CardHeaderCompact;