import React, { FunctionComponent } from "react";
import Avatar from "components/Avatar/Avatar";
import Item from "components/Item/Item";
import Text from "components/Text/Text";
import Label from "components/Label/Label";
import { TResponse } from "utils/types";

type Props = {
  response: TResponse;
};

const ResponseView: FunctionComponent<Props> = ({ response }) => {
  return (
    <Item className="ion-no-padding">
      <div>
        <Item className="ion-no-padding">
          <Avatar src={response.pathAvatarImage} size={10} />
          <Label className="ml-4">
            <Text>{response.nameUser}</Text>
            <Text>{response.date}</Text>
          </Label>
        </Item>
        <Text color="medium" align="left" className="ml-14 mr-4">
          {response.response}
        </Text>
      </div>
    </Item>
  );
};

export default ResponseView;
