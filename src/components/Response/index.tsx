import React, { FunctionComponent } from "react";
import { TResponse } from "utils/types";
import ResponseView from "components/Response/ResponseView";

type Props = {
  response: TResponse;
}

const Response: FunctionComponent<Props> = ({ response }) => {
  return (
    <ResponseView response={response}/>
  );
};

export default Response;
