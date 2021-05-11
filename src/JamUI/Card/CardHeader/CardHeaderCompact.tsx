import React, { Fragment, FunctionComponent } from "react";

type Props = {};

const CardHeaderCompact: FunctionComponent<Props> = (props) => (
  <Fragment>{props.children}</Fragment>
);
export default CardHeaderCompact;
