import React from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import namesRoutes from 'routes/names';
import { useFetch, useShowTabs } from 'hooks';
import { TIngredient } from 'models';
import Server from 'server';

const FoodBasketAdd: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();

	useShowTabs(false);

	const handlerAddIngredient = (e: any) => {
		e.preventDefault();
		history.push(namesRoutes.foodBasket);
	};

	const { data, loading, error } = useFetch<TIngredient[]>(
		Server.getIngredients,
		[]
	);

	return (
		<View
			texts={t}
			fetch={{ data, loading, error }}
			handlerAddIngredient={handlerAddIngredient}
		/>
	);
};

export default FoodBasketAdd;
