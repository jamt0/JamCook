import { useEffect, useState } from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Server from 'server';
import namesRoutes from 'routes/names';
import { useShowTabs } from 'hooks';

const ingredientes = [
	{
		id: '1',
		ingrediente: 'Huevo',
		outline: false,
	},
	{
		id: '2',
		ingrediente: 'Marisco',
		outline: true,
	},
	{
		id: '3',
		ingrediente: 'Lactosa',
		outline: true,
	},
	{
		id: '4',
		ingrediente: 'Gluten',
		outline: true,
	},
	{
		id: '5',
		ingrediente: 'Frutos Secos',
		outline: true,
	},
];

const Allergies: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const [ingredients, setIngredients] = useState(ingredientes);
	const [ingredientsUser, setIngredientsUser] = useState();
	const [loading, setLoading] = useState<boolean>(false);
	const [errores, setErrors] = useState<string>('');

	useShowTabs(false);

	const handlerSaveEditButton = (e: any) => {
		e.preventDefault();
		history.push(namesRoutes.profile);
	};

	// useEffect(() => {
	//   setLoading(true);
	//   Server.getAllergies()
	//     .then((response) => {
	//       if (!response.data.error) {
	//         setIngredients(response.data.ingredients);
	//         setLoading(false);
	//       } else {
	//         setErrors(response.data.error);
	//         setLoading(false);
	//       }
	//     })
	//     .catch((error) => {
	//       console.log(error);
	//       setLoading(false);
	//     });
	//   if (auth.user?.id) {
	//     Server.getAllergiesUser(auth.user.id)
	//       .then((response) => {
	//         if (!response.data.error) {
	//           setIngredientsUser(response.data.ingredients);
	//           setLoading(false);
	//         } else {
	//           setErrors(response.data.error);
	//           setLoading(false);
	//         }
	//       })
	//       .catch((error) => {
	//         console.log(error);
	//         setLoading(false);
	//       });
	//   }
	// }, []);

	return (
		<View
			texts={t}
			formHook={{}}
			ingredients={ingredients}
			handlerSaveEditButton={handlerSaveEditButton}
			loading={loading}
			errores={errores}
		/>
	);
};

export default Allergies;
