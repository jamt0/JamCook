import { useIonViewWillEnter } from '@ionic/react';
import { useAppDispatch } from 'global/hooks';
import { resetError } from 'global/features/userSlice';

const useResetAuthError = () => {
	const dispatch = useAppDispatch();
	return useIonViewWillEnter(() => {
		dispatch(resetError());
	}, [dispatch]);
};

export default useResetAuthError;
