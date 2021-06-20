import { Fragment, FunctionComponent } from "react";
import { Commentary } from "components";
import { ButtonLink } from "UI";
import { TCommentary } from "models";
import { useTranslation } from 'react-i18next';

type Props = {
  comments: TCommentary[];
};

const CommentaryBox: FunctionComponent<Props> = ({ comments }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {comments.map((comentary) => {
        return <Commentary commentary={comentary} key={comentary.id} />;
      })}
      <div className="mt-4">
        <ButtonLink>{t('ver_todos_comentarios')}</ButtonLink>
      </div>
    </Fragment>
  );
};

export default CommentaryBox;
