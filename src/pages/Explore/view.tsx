import { FunctionComponent } from 'react';
import { GridImages } from 'components';
import { TCategory, TFetch } from 'models';
import { Scaffold, Searcher, Title } from 'UI';

type Props = {
	texts: any;
	fetch: TFetch<TCategory[]>;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Content>
			<Title color='medium'>{props.texts('page_explorar')}</Title>
			<Searcher placeHolder={props.texts('plato_gustaria')} />
			<GridImages categories={props.fetch.data} />
		</Scaffold.Content>
	</Scaffold>
);
export default View;
