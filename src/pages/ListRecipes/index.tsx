import React, { useCallback } from 'react';
import View from './view';
import { useFetchInfinite, useInfinite, useRefresh, useShowTabs } from 'hooks';
import { TRecipeCard } from 'models';
import Server from 'server';
import { useParams } from 'react-router-dom';

const ListRecipes: React.FC = () => {
	useShowTabs(false);

	const { id } = useParams<{ id: string }>();

	const fetchFunction = useCallback(() => Server.getRecipesList(id), [id]);

	const { data, loading, error, fetchData, fetchDataInfinite } =
		useFetchInfinite<TRecipeCard>(fetchFunction);

	const doRefresh = useRefresh(fetchData);

	const doInfinite = useInfinite(fetchDataInfinite);

	return (
		<View
			fetch={{ data, loading, error }}
			doRefresh={doRefresh}
			doInfinite={doInfinite}
			titleListRecipes='Listado'
		/>
	);
};

export default ListRecipes;
