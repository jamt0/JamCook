import { useEffect, useState } from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import useShowTabs from 'hooks/useShowTabs';
import { useAppSelector } from 'global/hooks';
import { selectUser } from 'global/features/userSlice';

const ListRecipes = [
	{
		id: '1',
		nameListRecipes: 'Nuevas Recetas',
		recipes: [
			{
				id: '1',
				pathRecipeImage: 'https://picsum.photos/200/300?random=1',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '2',
				pathRecipeImage: 'https://picsum.photos/200/300?random=2',
				name: 'Tacos Mexicanos',
			},
			{
				id: '3',
				pathRecipeImage: 'https://picsum.photos/200/300?random=3',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '4',
				pathRecipeImage: 'https://picsum.photos/200/300?random=4',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '5',
				pathRecipeImage: 'https://picsum.photos/200/300?random=5',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '6',
				pathRecipeImage: 'https://picsum.photos/200/300?random=6',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '7',
				pathRecipeImage: 'https://picsum.photos/200/300?random=7',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
		],
	},
	{
		id: '2',
		nameListRecipes: 'Ultimas Recetas',
		recipes: [
			{
				id: '1',
				pathRecipeImage: 'https://picsum.photos/200/300?random=1',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '2',
				pathRecipeImage: 'https://picsum.photos/200/300?random=2',
				name: 'Tacos Mexicanos',
			},
			{
				id: '3',
				pathRecipeImage: 'https://picsum.photos/200/300?random=3',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '4',
				pathRecipeImage: 'https://picsum.photos/200/300?random=4',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '5',
				pathRecipeImage: 'https://picsum.photos/200/300?random=5',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '6',
				pathRecipeImage: 'https://picsum.photos/200/300?random=6',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '7',
				pathRecipeImage: 'https://picsum.photos/200/300?random=7',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
		],
	},
	{
		id: '3',
		nameListRecipes: 'Mejores Recetas',
		recipes: [
			{
				id: '1',
				pathRecipeImage: 'https://picsum.photos/200/300?random=1',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '2',
				pathRecipeImage: 'https://picsum.photos/200/300?random=2',
				name: 'Tacos Mexicanos',
			},
			{
				id: '3',
				pathRecipeImage: 'https://picsum.photos/200/300?random=3',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '4',
				pathRecipeImage: 'https://picsum.photos/200/300?random=4',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '5',
				pathRecipeImage: 'https://picsum.photos/200/300?random=5',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '6',
				pathRecipeImage: 'https://picsum.photos/200/300?random=6',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '7',
				pathRecipeImage: 'https://picsum.photos/200/300?random=7',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
		],
	},
	{
		id: '4',
		nameListRecipes: 'Nuevas Recetas',
		recipes: [
			{
				id: '1',
				pathRecipeImage: 'https://picsum.photos/200/300?random=1',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '2',
				pathRecipeImage: 'https://picsum.photos/200/300?random=2',
				name: 'Tacos Mexicanos',
			},
			{
				id: '3',
				pathRecipeImage: 'https://picsum.photos/200/300?random=3',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '4',
				pathRecipeImage: 'https://picsum.photos/200/300?random=4',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '5',
				pathRecipeImage: 'https://picsum.photos/200/300?random=5',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '6',
				pathRecipeImage: 'https://picsum.photos/200/300?random=6',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '7',
				pathRecipeImage: 'https://picsum.photos/200/300?random=7',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
		],
	},
	{
		id: '5',
		nameListRecipes: 'Nuevas Recetas',
		recipes: [
			{
				id: '1',
				pathRecipeImage: 'https://picsum.photos/200/300?random=1',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '2',
				pathRecipeImage: 'https://picsum.photos/200/300?random=2',
				name: 'Tacos Mexicanos',
			},
			{
				id: '3',
				pathRecipeImage: 'https://picsum.photos/200/300?random=3',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '4',
				pathRecipeImage: 'https://picsum.photos/200/300?random=4',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '5',
				pathRecipeImage: 'https://picsum.photos/200/300?random=5',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '6',
				pathRecipeImage: 'https://picsum.photos/200/300?random=6',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
			{
				id: '7',
				pathRecipeImage: 'https://picsum.photos/200/300?random=7',
				name: 'Tacos Mexicanos de Carnitas Asadas',
			},
		],
	},
];

const Search: React.FC = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [slidesPerView, setslidesPerView] = useState(1.5);
	const { t } = useTranslation();

	useShowTabs(true);

	function handleResize() {
		if (window.innerWidth >= 568 && width < 568) setWidth(window.innerWidth);
		if (window.innerWidth <= 568 && width > 568) setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		if (width >= 568) setslidesPerView(2.25);
		else setslidesPerView(1.25);
		return () => window.removeEventListener('resize', handleResize);
	}, [width]);

	const { isLoggedIn } = useAppSelector(selectUser);

	return (
		<View
			slidesPerView={slidesPerView}
			listRecipes={ListRecipes}
			texts={t}
			isLoggedIn={isLoggedIn}
		/>
	);
};

export default Search;
