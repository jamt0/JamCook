import React, { Fragment, FunctionComponent } from "react";

type Props = {
};

const CardHeaderCompact: FunctionComponent<Props> = ({
  children
}) => {
  return (
      <Fragment>{children}</Fragment>
  );
};

export default CardHeaderCompact;