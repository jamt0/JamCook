import { FunctionComponent } from 'react';
import { SliderRecipes } from 'components';
import { TFetch, TListRecipesSearch } from 'models';
import { Scaffold, Searcher, Title } from 'UI';
import Welcome from 'components/Welcome';

type Props = {
	texts: any;
	slidesPerView: number;
	isLoggedIn: boolean;
	fetch: TFetch<TListRecipesSearch[]>;
};

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
