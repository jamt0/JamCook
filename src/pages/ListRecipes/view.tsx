import { FunctionComponent } from 'react';
import { CardRecipe } from 'components';
import { ErrorBox, Loading, Scaffold } from 'UI';
import { TFetch, TRecipeList, TRefresh } from 'models';

type Props = {
	fetch: TFetch<TRecipeList>;
	doRefresh: TRefresh;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.fetch.data.titleListRecipes}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content refresher={props.doRefresh}>
			<Loading isOpen={props.fetch.loading} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.data.recipes.map((recipe) => {
				return <CardRecipe key={recipe.id} recipe={recipe} />;
			})}
		</Scaffold.Content>
	</Scaffold>
);
export default View;
