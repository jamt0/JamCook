import { Fragment, FunctionComponent } from 'react';
import { GridImages } from 'components';
import { TCategory, TFetch, TRefresh } from 'models';
import { ErrorBox, Scaffold, Searcher, Title } from 'UI';
import { IonSkeletonText } from '@ionic/react';

type Props = {
	texts: any;
	fetch: TFetch<TCategory[]>;
	doRefresh: TRefresh;
};

const Skeleton = () => (
	<div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-6'>
		{[1, 2, 3, 4, 5].map((x) => (
			<Fragment key={x}>
				<IonSkeletonText animated className='w-full h-32' />
				<IonSkeletonText animated className='w-full h-32' />
			</Fragment>
		))}
	</div>
);

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Content refresher={props.doRefresh}>
			<Title color='medium'>{props.texts('page_explorar')}</Title>
			<Searcher placeHolder={props.texts('plato_gustaria')} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.loading && <Skeleton />}
			<GridImages categories={props.fetch.data} />
		</Scaffold.Content>
	</Scaffold>
);
export default View;
