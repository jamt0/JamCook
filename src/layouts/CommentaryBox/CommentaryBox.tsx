import React, { Fragment, FunctionComponent } from "react";
import Commentary from "layouts/Commentary/Commentary";
import ButtonLink from "components/ButtonLink/ButtonLink";
import { TCommentary } from "utils/types";
import { useSettingsUser } from "context/settingsUser";

type Props = {
  comments: TCommentary[];
};

const CommentaryBox: FunctionComponent<Props> = ({ comments }) => {
  const { texts } = useSettingsUser()!;
  return (
    <Fragment>
      {comments.map((comentary) => {
        return <Commentary commentary={comentary} key={comentary.id} />;
      })}
      <div className="mt-4">
        <ButtonLink>{texts.ver_todos_comentarios}</ButtonLink>
      </div>
    </Fragment>
  );
};

export default CommentaryBox;
