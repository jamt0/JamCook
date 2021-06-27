import React, { useCallback } from 'react';
import View from './view';
import { useFetch, useShowTabs } from 'hooks';
import { TRecipeList } from 'models';
import Server from 'server';
import { useParams } from 'react-router-dom';

const ListRecipes: React.FC = () => {
	useShowTabs(false);

	const { id } = useParams<{ id: string }>();

	const fetchData = useCallback(() => Server.getRecipesList(id), [id]);

	const { data, loading, error } = useFetch<TRecipeList>(fetchData, {
		titleListRecipes: '',
		recipes: [],
	});

	return <View fetch={{ data, loading, error }} />;
};

export default ListRecipes;
