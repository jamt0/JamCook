import { FunctionComponent, useState } from "react";
import View from "./view";
import { TCommentary } from "utils/types";

type Props = {
  commentary: TCommentary;
};

const Commentary: FunctionComponent<Props> = ({ commentary }) => {
  const [showResponses, setShowResponses] = useState(false);
  const [like, setLike] = useState(false);

  const handlerShowAnswerButton = (e: any) => {
    e.preventDefault();
    setShowResponses(!showResponses);
  };

  const handlerLikeButton = (e: any) => {
    e.preventDefault();
    setLike(!like);
  };

  return (
    <View
      commentary={commentary}
      like={like}
      showResponses={showResponses}
      handlerLikeButton={handlerLikeButton}
      handlerShowAnswerButton={handlerShowAnswerButton}
    />
  );
};

export default Commentary;
