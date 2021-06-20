import { Fragment, FunctionComponent } from "react";
import { TResponse } from "models";
import { Response } from "components";

type Props = {
  responses: TResponse[];
};

const ResponseBox: FunctionComponent<Props> = ({ responses }) => {
  return (
    <Fragment>
      {responses.map((response) => {
        return <Response response={response} key={response.id} />;
      })}
    </Fragment>
  );
};

export default ResponseBox;
