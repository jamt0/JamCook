import React from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import { useFetch, useRefresh, useShowTabs } from 'hooks';
import Server from 'server';
import { TCategory } from 'models';

const Explore: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(true);

	const { data, loading, error, fetchData } = useFetch<TCategory[]>(
		Server.getRecipesExplore,
		[]
	);

	const doRefresh = useRefresh(fetchData);

	return (
		<View texts={t} fetch={{ data, loading, error }} doRefresh={doRefresh} />
	);
};

export default Explore;
