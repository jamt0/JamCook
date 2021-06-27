import { useCallback, useState } from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import { useFetch, useRefresh, useShowTabs } from 'hooks';
import { useParams } from 'react-router-dom';
import Server from 'server';
import { TRecipeComplete } from 'models';

const Recipe: React.FC = () => {
	const [portions, setPortions] = useState(1);
	const [stars, setStars] = useState([false, false, false, false, false]);
	const { t } = useTranslation();

	useShowTabs(false);

	const handlerShare = (e: any) => {};

	const handlerLike = (e: any) => {};

	const handlerMark = (e: any) => {};

	const handlerRecipeMade = (e: any) => {};

	const handlerValoration = (e: any, index: number) => {
		e.preventDefault();
		var newEstrellas = [...stars];
		newEstrellas.forEach((estrella, i) => {
			if (i <= index) {
				newEstrellas[i] = true;
			} else {
				newEstrellas[i] = false;
			}
		});
		setStars(newEstrellas);
		return undefined;
	};

	const { id } = useParams<{ id: string }>();

	const fetchFunction = useCallback(() => Server.getRecipe(id), [id]);

	const { data, loading, error, fetchData } = useFetch<TRecipeComplete | null>(
		fetchFunction,
		null
	);

	const doRefresh = useRefresh(fetchData);

	return (
		<View
			texts={t}
			handlerShare={handlerShare}
			handlerLike={handlerLike}
			handlerMark={handlerMark}
			handlerRecipeMade={handlerRecipeMade}
			handlerValoration={handlerValoration}
			fetch={{ data, loading, error }}
			portions={portions}
			stars={stars}
			setPortions={setPortions}
			doRefresh={doRefresh}
		/>
	);
};

export default Recipe;
