import React from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import { useFetch, useShowTabs } from 'hooks';
import Server from 'server';
import { TCategory } from 'models';

const Explore: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(true);

	const { data, loading, error } = useFetch<TCategory[]>(
		Server.getRecipesExplore,
		[]
	);

	return <View texts={t} fetch={{ data, loading, error }} />;
};

export default Explore;
