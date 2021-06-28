import { FunctionComponent } from 'react';
import { CardRecipe } from 'components';
import { ErrorBox, Loading, Scaffold } from 'UI';
import { TFetch, TInfiniteScroll, TRecipeCard, TRefresh } from 'models';

type Props = {
	fetch: TFetch<TRecipeCard[]>;
	doRefresh: TRefresh;
	doInfinite: TInfiniteScroll;
	titleListRecipes: string;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.titleListRecipes}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content refresher={props.doRefresh} infinite={props.doInfinite}>
			<Loading isOpen={props.fetch.loading} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.data.map((recipe, index) => {
				return <CardRecipe key={index} recipe={recipe} />;
			})}
		</Scaffold.Content>
	</Scaffold>
);
export default View;
