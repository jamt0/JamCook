import React, { Fragment, FunctionComponent } from "react";
import { TResponse } from "utils/types";
import Response from "layouts/Response/Response";

type Props = {
  responses: TResponse[];
}

const ResponseBox: FunctionComponent<Props> = ({ responses }) => {
  return (
    <Fragment>
      {responses.map((response) => {
        return (
            <Response response={response} key={response.id} />
        );
      })}
    </Fragment>
  );
};

export default ResponseBox;
