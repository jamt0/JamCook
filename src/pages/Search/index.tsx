import { useState } from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import { useShowTabs, useFetch, useRefresh } from 'hooks';
import { useAppSelector } from 'global/hooks';
import { selectUser } from 'global/features/userSlice';
import { useChangeWidth } from './hooks';
import { TListRecipesSearch } from 'models';
import Server from 'server';

const Search: React.FC = () => {
	const [slidesPerView, setSlidesPerView] = useState(1.5);

	const { t } = useTranslation();

	useShowTabs(true);

	useChangeWidth(setSlidesPerView);

	const { isLoggedIn } = useAppSelector(selectUser);

	const { data, loading, error, fetchData } = useFetch<TListRecipesSearch[]>(
		Server.getRecipesSearch,
		[]
	);

	const doRefresh = useRefresh(fetchData);

	return (
		<View
			slidesPerView={slidesPerView}
			fetch={{ data, loading, error }}
			texts={t}
			isLoggedIn={isLoggedIn}
			doRefresh={doRefresh}
		/>
	);
};

export default Search;
