import React from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import namesRoutes from 'routes/names';
import { useFetch, useRefresh, useShowTabs } from 'hooks';
import { TIngredient } from 'models';
import Server from 'server';

const FoodBasket: React.FC = () => {
	const history = useHistory();

	const { t } = useTranslation();

	useShowTabs(true);

	const handlerAddIngredient = (e: any) => {
		e.preventDefault();
		history.push(namesRoutes.foodBasketAdd);
	};

	const { data, loading, error, fetchData } = useFetch<TIngredient[]>(
		Server.getIngredients,
		[]
	);

	const doRefresh = useRefresh(fetchData);

	return (
		<View
			texts={t}
			fetch={{ data, loading, error }}
			handlerAddIngredient={handlerAddIngredient}
			doRefresh={doRefresh}
		/>
	);
};

export default FoodBasket;
