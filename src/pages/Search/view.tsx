import { Fragment, FunctionComponent } from 'react';
import { SliderRecipes } from 'components';
import { TFetch, TListRecipesSearch } from 'models';
import { ErrorBox, Scaffold, Searcher, Title } from 'UI';
import Welcome from 'components/Welcome';
import { IonSkeletonText } from '@ionic/react';

type Props = {
	texts: any;
	slidesPerView: number;
	isLoggedIn: boolean;
	fetch: TFetch<TListRecipesSearch[]>;
};

const Skeleton = () => (
	<Fragment>
		{[1, 2, 3, 4].map((x) => (
			<Fragment key={x}>
				<div className='grid gap-4 grid-cols-3 md:grid-cols-4'>
					<IonSkeletonText
						animated
						className='w-2/3 col-span-2 md:col-span-3'
					/>
					<IonSkeletonText animated className='w-full' />
				</div>
				<div className='grid gap-4 grid-cols-3 md:grid-cols-4'>
					<IonSkeletonText
						animated
						className='w-full h-32 col-span-2 md:col-span-3'
					/>
					<IonSkeletonText animated className='w-full h-32' />
				</div>
				<div className='grid gap-4 grid-cols-3 md:grid-cols-4 mb-6'>
					<IonSkeletonText
						animated
						className='w-full col-span-2 md:col-span-3'
					/>
					<IonSkeletonText animated className='w-full' />
				</div>
			</Fragment>
		))}
	</Fragment>
);

const Search: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Content>
			{!props.isLoggedIn && <Welcome />}
			<Title align='center' color='medium'>
				{props.texts('slogan_2_1')}
				<br />
				{props.texts('slogan_2_2')}
			</Title>
			<Searcher placeHolder={props.texts('search_buscar_recetas')} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.loading && <Skeleton />}
			{props.fetch.data.map((recipes) => (
				<SliderRecipes
					listRecipes={recipes}
					slidesPerView={props.slidesPerView}
					key={recipes.id}
				/>
			))}
		</Scaffold.Content>
	</Scaffold>
);
export default Search;
