import React, { useCallback } from 'react';
import View from './view';
import { useFetch, useRefresh, useShowTabs } from 'hooks';
import { TRecipeList } from 'models';
import Server from 'server';
import { useParams } from 'react-router-dom';

const ListRecipes: React.FC = () => {
	useShowTabs(false);

	const { id } = useParams<{ id: string }>();

	const fetchFunction = useCallback(() => Server.getRecipesList(id), [id]);

	const { data, loading, error, fetchData } = useFetch<TRecipeList>(
		fetchFunction,
		{
			titleListRecipes: '',
			recipes: [],
		}
	);

	const doRefresh = useRefresh(fetchData);

	return <View fetch={{ data, loading, error }} doRefresh={doRefresh} />;
};

export default ListRecipes;
