import { FunctionComponent } from "react";
import { Avatar, Item, Label, Text } from "UI";
import { TResponse } from "models";

type Props = {
  response: TResponse;
};

const View: FunctionComponent<Props> = ({ response }) => {
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

export default View;