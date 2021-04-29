import React, { Fragment, FunctionComponent, useState } from "react";
import Commentary from "layouts/Commentary/Commentary";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { TCommentary } from "utils/types";
import { useSettingsUser } from "context/settingsUser";

type Props = {
  comments: TCommentary[];
};

const CommentaryBox: FunctionComponent<Props> = ({ comments }) => {
  const { textos } = useSettingsUser()!;
  return (
    <Fragment>
      {comments.map((comentary) => {
        return <Commentary commentary={comentary} />;
      })}
      <div className="mt-4">
        <ButtonLink>{textos["ver_todos_comentarios"]}</ButtonLink>
      </div>
    </Fragment>
  );
};

export default CommentaryBox;
