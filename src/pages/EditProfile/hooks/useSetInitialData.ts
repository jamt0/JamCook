import { useIonViewWillEnter } from '@ionic/react';
import { useState } from 'react';

const useSetInitialData = (
	getGenders: () => Promise<void>,
	getAges: () => Promise<void>,
	getUserData: () => Promise<void>
) => {
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	useIonViewWillEnter(async () => {
		try {
			setLoading(true);
			await getGenders();
			await getAges();
			await getUserData();
			setLoading(false);
		} catch (error) {
			setError('Ha ocurrido un error');
		}
	}, []);
	return { loading, error };
};

export default useSetInitialData;
